"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"
import { Separator } from "@/components/ui/separator"
import AuthImage from '../shared/authImage/AuthImage'
import { useRouter } from 'next/navigation'
import AuthButton from '../shared/authButton/AuthButton'

type Inputs = {
    email: string;
    password: string;
}

function LoginForm() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        router.push("/dashboard/dashboard")
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* message icon  */}
            <div>
                <Image src="/dashboardIcons/messageImg.svg" width={40} height={40} alt='Message image' className='m-6 cursor-pointer' />
            </div>
            {/* Left: Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-left">
                        <h1 className="text-2xl md:text-4xl font-semibold text-[#22222F] mb-2">Login</h1>
                        <p className="text-sm text-[#8588AB]">
                            Welcome back! Log in with your email and <br /> password to continue.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Login with google  */}
                        <div className='
                             rounded-lg
                             border border-[#D5D6E2] bg-white
                             shadow-[0px_1px_1px_0px_rgba(18,25,44,0.06),0px_1px_1px_0px_rgba(18,25,44,0.04)]
                             flex items-center justify-center gap-2
                             cursor-pointer p-1.5
                           '>
                            <Image
                                src="/dashboardIcons/google.svg"
                                width={25}
                                height={25}
                                alt='google icon'
                                className='border rounded p-1'
                            />
                            <h3 className='text-[#22222F] font-semibold text-sm'>Log in with Google</h3>
                        </div>


                        {/* email input */}
                        <div>
                            <label className="block text-sm font-medium text-[#22222F] mb-2">
                                Email <span className='text-[#D94F4F] text-sm font-semibold'>*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                                className={`
                                   w-full px-4 py-2 text-sm font-semibold text-[#22222F]
                                   border rounded-md
                                   focus:outline-[1px] focus:outline-[#0D5AE8]
                                   focus:shadow-[0px_0px_0px_2px_#B5E6FF]
                                   ${errors.email ? "border-[#D94F4F]" : ""}
                                 `}
                            />

                            {errors.email && (
                                <p className="text-[#D94F4F] text-sm font-semibold mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        {/* password input */}
                        <div>
                            <label className="block text-sm font-medium text-[#22222F] mb-1">
                                Password <span className='text-[#D94F4F] text-sm font-semibold'>*</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className={`w-full px-4 py-2 text-sm font-semibold text-[#22222F]
                                   border rounded-md
                                   focus:outline-[1px] focus:outline-[#0D5AE8]
                                   focus:shadow-[0px_0px_0px_2px_#B5E6FF] ${errors.password ? "border-[#D94F4F] focus:ring-[#D94F4F]" : "focus:ring-[#217AFC]"
                                    }`}
                            />
                            {errors.password && (
                                <p className="text-[#D94F4F] text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* use common auth button */}
                        <AuthButton type='submit'>
                            Log in
                        </AuthButton>
                        {/* forgot password  */}
                        <div className='text-center'>
                            <Link href="/forgotpassword" className='text-[#217AFC] text-sm font-semibold'>Forgot your password?</Link>
                        </div>
                        {/* separator  */}
                        <div>
                            <Separator />
                        </div>
                        {/* redirect signup page  */}
                        <div className='text-center'>
                            <span className='text-[#8588AB] text-sm'>Don’t have an account?</span> <Link href="/signup" className='text-[#217AFC] text-sm font-semibold cursor-pointer'>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
            {/* Right: Image */}
            <AuthImage />
        </div>
    )
}

export default LoginForm
