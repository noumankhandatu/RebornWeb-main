'use client'
import { useEffect } from 'react';

const Cookies = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://app.getterms.io/cookie-consent/embed/a7d1d92c-95c2-4a78-a59a-3eca424ee3a5";
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            console.log("Cookies loaded");
        });

        return () => {
            // Clean up: remove the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <div>
          <h1>Cookie</h1>
        </div>
    );
};

export default Cookies;
