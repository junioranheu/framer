import { useEffect, useState } from 'react';

// Lazy loading: https://betterprogramming.pub/lazy-loading-in-next-js-simplified-435681afb18a
export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
    }, [])

    return isIntersecting;
}
