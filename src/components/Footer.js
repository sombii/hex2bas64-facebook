export default function Footer() {
    return (
        <footer className="mt-32 p-8 border-t border-gray-700">
            <div className="max-w-5xl mx-auto flex justify-center items-center flex-col">
                <p>Created by <a href="https://sanjogr.com.cp" className="border-b-2 border-blue-400" target="_blank" rel={"noreferrer noopener"}>sanjogr.com.np</a> (sombex.com) | {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}