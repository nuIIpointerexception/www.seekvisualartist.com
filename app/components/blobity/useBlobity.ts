import { useEffect, useRef } from "react";
import Blobity, { Options } from "./Blobity";

const useBlobity = (options: Partial<Options>) => {
    const instance = useRef<Blobity | null>(null);

    useEffect(() => {
        if (!instance.current) {
            instance.current = new Blobity(options);
        }
    }, [options]);

    return instance;
};

export default useBlobity;
