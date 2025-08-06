"use client"

import Image from 'next/image'
import Link from 'next/link'
import AuthImage from '../shared/authImage/AuthImage'
import AuthButton from '../shared/authButton/AuthButton'

function CheckEmailForm() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* message icon  */}
            <div>
                <Image src="/dashboardIcons/messageImg.svg" width={40} height={40} alt='Message image' className='m-6 cursor-pointer' />
            </div>
            {/* Left */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-left">
                        <h1 className="text-2xl lg:text-4xl font-semibold text-[#22222F] mb-2">Check your email</h1>
                        <p className="text-sm text-[#8588AB]">
                            A confirmation email has just been sent to the email address <br /> you provided. Click the link in this email to reset your <br /> password.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <Link href="/login">
                            <AuthButton type='submit'>
                                Log in
                            </AuthButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right: Image */}
            <AuthImage />
        </div>
    )
}

export default CheckEmailForm
