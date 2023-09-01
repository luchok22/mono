import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    query,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useNews = () => {
    const [error, setError] = useState("");
    const [news, setNews] = useState([]);
    const [newsDetail, setNewsDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getNews = useCallback(async () => {
        const arr = [];
        const data = await getDocs(query(collection(db, "news"), limit(8)));
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setNews(arr);
        setLoading(false);
    }, []);

    const getNewsDetail = async (id) => {
        const docRef = doc(db, "news", id);
        const res = await getDoc(docRef);
        setLoading(false);
        if (res.exists()) {
            setNewsDetail(res.data());
        }
    };


    return {
        isLoading,
        news,
        getNews,
        newsDetail,
        getNewsDetail,
        error,
    };
};

export default useNews;
