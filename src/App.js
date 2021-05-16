import './App.css';
import Arrow from "./components/Arrow";
import {useState} from "react";

function App() {

    const [hex, setHex] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState({});

    const handleSwitch = () => {
        // setHex((prevState) => setHex(!prevState))
        setHex(!hex)
        const temp = result;
        setResult(inputValue);
        setInputValue(temp);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        if (hex && e.target.value !== "") {
            try {
                const a = btoa(e.target.value.split(':').map(hc => String.fromCharCode(parseInt(hc, 16))).join(''));
                setResult(a)
                setError({status: false})
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const a = atob(e.target.value)
                    .split('')
                    .map(c => c.charCodeAt(0).toString(16))
                    .join(':')
                setResult(a)
                setError({status: false})
            } catch (error) {
                // if (error === "DOMException: String contains an invalid character") {
                setError({message: "Invalid hash key", status: true})
                // }
            }
        }
    }

    const handleFocus = e => {
        e.target.select()
    }

    return (
        <div className="bg-gray-800 font-bold text-gray-300 px-8 py-12">
            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-center">
                    <a href="/">AM</a>
                    <nav>
                        <a href="/about">About</a>
                    </nav>
                </header>
                <div className="mt-20">
                    <p className="text-blue-300 mb-8">Conversion Tool</p>
                    <h1 className="font-black md:text-5xl text-3xl tracking-wide leading-tight">Google PlayStore App Key To Facebook
                        Hash
                        Key Converter</h1>
                    <div
                        className="mt-16 p-12 rounded-3xl bg-gray-900 flex justify-between items-center flex-col lg:flex-row lg:space-y-0 space-y-10">
                        <div className=" w-full">
                            <label htmlFor="enter"
                                   className="text-xl">{hex ? "Certificate Fingerprint (SHA1, SHA256)" : "Base64 Key Hash"}</label>
                            <input type="text" id="enter" onChange={handleChange} value={inputValue}
                                   className="block mt-8 mb-6 rounded-xl py-4 px-6 bg-gray-800 text-white border-transparent outline-none w-full"
                                   placeholder={hex ? "hex map hash" : "base64 hash"}
                            />
                            <p className="font-normal text-blue-300 lg:max-w-sm max-w-3xl">Paste hash key here, Make
                                sure hash key is correct.</p>
                            <p className="font-normal text-gray-500 lg:max-w-sm max-w-3xl text-xs mt-3">ex:
                                2c:3b:db:b2:ef:c5:5a:1d:ae:f7:28:6f:a7:77:d9:20:c8:1:dd:fa </p>
                        </div>
                        <button onClick={handleSwitch} className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 m-16">
                            <Arrow/>
                        </button>
                        <div className=" w-full">
                            <label htmlFor="result"
                                   className="text-xl">{hex ? "Base64 Key Hash" : "Certificate Fingerprint (SHA1, SHA256)"}</label>
                            <input type="text" id="result" readOnly value={error.status ? error.message : result}
                                   onFocus={handleFocus}
                                   className="block mt-8 mb-6 rounded-xl py-4 px-6 bg-gray-800 text-white border-transparent outline-none  w-full"/>
                            <p className="font-normal text-blue-300 lg:max-w-sm max-w-3xl">Converted hash will be shown
                                here.</p>
                            <p className="font-normal text-gray-500 lg:max-w-sm max-w-3xl text-xs mt-3">ex: LDvbsu/FWh2u9yhvp3fZIMgB3fo=</p>
                        </div>
                    </div>
                </div>
                <section className="mt-16 tracking-wide">
                    <div className="mt-10">
                        <h2 className="text-blue-300">Where/How Certificate Fingerprint (SHA1, SHA256) ?</h2>
                        <p className="font-medium mt-4">
                            You can find your <strong>Certificate Fingerprint (SHA1, SHA256)</strong> on your Google
                            Play Console. Select your App.
                            On App <strong>Setup section</strong> you can get your fingerprints.
                        </p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-blue-300">Where/How To Use Converted Base64 Key Hashes?</h2>
                        <p className="font-medium mt-4">
                            Go to your <strong>Facebook Developer Account</strong>. Select your App. On your Application
                            go to <strong>Settings/Basic</strong>. Find <strong>Android</strong> section. There you will
                            need to enter these hashes.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
