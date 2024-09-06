export default function MockUpCode(props){
    return(
        <>
        <div className="bg-white py-2 sm:py-2">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <div className="mockup-code bg-neutral-100 text-base-content">
                            {props.children}
                            {/* {text.length > 0 ? text.map((item) =>
                                    <pre data-prefix=">"><code>{item}</code></pre>
                                ): <></>} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}