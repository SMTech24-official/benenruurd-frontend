"use client"

import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form"
import AuthImage from '../shared/authImage/AuthImage';
import AuthButton from '../shared/authButton/AuthButton';

type Inputs = {
    password: string;
    resetPassword: string;
}

function ResetPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
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
                        <h1 className="text-2xl md:text-4xl font-semibold text-[#22222F] mb-2">Enter your new <br /> password</h1>
                        <p className="text-sm text-[#8588AB]">
                            Please enter your new password below to continue.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                        {/* reset password input */}
                        <div>
                            <label className="block text-sm font-medium text-[#22222F] mb-1">
                                Reset password <span className='text-[#D94F4F] text-sm font-semibold'>*</span>
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
                            Change password
                        </AuthButton>
                    </form>
                </div>
            </div>

            {/* Right: Image */}
            <AuthImage />
        </div>
    )
}

export default ResetPasswordForm
