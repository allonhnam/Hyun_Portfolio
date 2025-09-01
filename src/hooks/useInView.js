import { useEffect, useRef, useState } from "react"

export default function useInView(options = { root: null, rootMargin: "200px 0px", threshold: 0 }) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el || typeof IntersectionObserver === "undefined") {
            setInView(true)
            return
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
                observer.unobserve(el)
            }
        }, options)

        observer.observe(el)
        return () => observer.disconnect()


    }, [])

    return { ref, inView }
}