import {
    collection,
    doc,
    getDoc,
    getDocs,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useCatalogLinks = () => {
    const [error, setError] = useState("");
    const [catalogLinks, setCatalogLinks] = useState([]);
    const [catalogLinksDetail, setCatalogLinksDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getCatalogLinks = useCallback(async () => {
        const arr = [];
        const data = await getDocs(collection(db, "catalogLinks"));
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setCatalogLinks(arr);
        setLoading(false);
    }, []);

    const getCatalogLinksDetail = async (id) => {
        const docRef = doc(db, "catalogLinks", id);
        const res = await getDoc(docRef);
        setLoading(false);
        if (res.exists()) {
            setCatalogLinksDetail(res.data());
        } else {
            setError("Данный айтем не найден!");
        }
    };

    return {
        isLoading,
        catalogLinks,
        getCatalogLinks,
        catalogLinksDetail,
        getCatalogLinksDetail,
        error,
    };
};

export default useCatalogLinks;
