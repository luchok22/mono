import { useState } from "react";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

const useCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [catalogDetail, setCatalogDetail] = useState([])
  const [isLoading, setLoading] = useState(true);

  const getCatalog = async () => {
    const catalogArr = [];
    const getFireStore = query(collection(db, "catalog"));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc) =>
      catalogArr.push({ tid: doc.id, ...doc.data() })
    );
    setCatalog(catalogArr);
    setLoading(false);
  };
  const getCatalogDetail = async (id) => {
    const docRef = doc(db, "catalog", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
        setCatalogDetail(res.data());
    } 
};

  return {
    catalog,
    getCatalogDetail,
    getCatalog,
    catalogDetail,
    isLoading,
  };
};

export default useCatalog;
