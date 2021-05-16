export default function Help() {
    return (
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
    )
}