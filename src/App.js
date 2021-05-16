import './App.css';
import Arrow from "./components/Arrow";
import {useState} from "react";
// import Header from "./components/Header";
import Help from "./components/Help";
import Footer from "./components/Footer";

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
                console.log({error})
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
                {/*<Header/>*/}
                <div className="mt-20">
                    <p className="text-blue-300 mb-8">Conversion Tool</p>
                    <h1 className="font-black md:text-5xl text-3xl tracking-wide leading-tight">Google PlayStore App Key
                        To Facebook Hash Key Converter</h1>
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
                                {hex ? " 2c:3b:db:b2:ef:c5:5a:1d:ae:f7:28:6f:a7:77:d9:20:c8:1:dd:fa" : " LDvbsu/FWh2u9yhvp3fZIMgB3fo="}</p>
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
                            <p className="font-normal text-gray-500 lg:max-w-sm max-w-3xl text-xs mt-3">ex:
                                {hex ? " LDvbsu/FWh2u9yhvp3fZIMgB3fo=" : " 2c:3b:db:b2:ef:c5:5a:1d:ae:f7:28:6f:a7:77:d9:20:c8:1:dd:fa"}</p>
                        </div>
                    </div>
                </div>
                <Help/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
