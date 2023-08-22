export const LogIn = () => {

    return (
        <div className="z-50 h-full w-full flex justify-center flex-col mt-2">
            <div className="flex flex-col">
                <p className="font-bold text-xl my-4">What's your phone number or email?</p>
                <div className="my-1">
                <input type="email" placeholder="Enter phone number or email" className="w-[26rem] h-12 rounded-md pl-1" />
                </div>
                <div className="my-1">
                <input type="password" placeholder="password" className="w-[26rem] h-12 rounded-md pl-1" />
                </div>
                <div className="my-8">
                <button className="text-white bg-black p-2 rounded-md w-[14rem]">Continue</button>
                </div>
            </div>
        </div>
    )
}
