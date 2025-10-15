import React, { useState, useRef } from 'react'
import img from '../../assets/Login/Banner/6313470.jpg'

interface LoginPopupProps {
  onClose: () => void
  onLoginSuccess: () => void // NEW
}

const countryMaxLength: Record<string, number> = {
  '+91': 10,
  '+1': 10,
  '+61': 9,
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, onLoginSuccess }) => {
  const [step, setStep] = useState<'number' | 'otp'>('number')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [countryCode, setCountryCode] = useState('+91')

  const maxDigits = countryMaxLength[countryCode]
  const otpRefs = useRef<HTMLInputElement[]>([])

  const handleSendOtp = () => {
    if (mobile.length === maxDigits) {
      setStep('otp')
      setOtp(['', '', '', ''])
    } else {
      alert(`Enter valid ${maxDigits}-digit mobile number`)
    }
  }

  const handleVerifyOtp = () => {
    if (otp.every((digit) => digit !== '')) {
      alert(`OTP verified successfully! (${otp.join('')})`)
      onLoginSuccess() // notify NavBar
      onClose()
    } else {
      alert('Enter valid 4-digit OTP')
    }
  }

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= maxDigits) setMobile(value)
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value)
    setMobile('')
    setOtp(['', '', '', ''])
    setStep('number')
  }

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 3) otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-lg overflow-hidden">
        {/* Header */}
        <div
          className="relative w-full h-32 flex flex-col justify-center items-center text-white rounded-t-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <button onClick={onClose} className="absolute top-3 right-4 text-white text-xl font-bold">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {step === 'number' && (
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-center">Enter your mobile number</h2>
              <p className="text-sm text-gray-500 text-center">
                If you don’t have an account yet, we’ll create one for you
              </p>

              <div className="flex border border-gray-300 rounded overflow-hidden">
                <div className="flex items-center px-3 border-r border-gray-300 bg-gray-100">
                  <select
                    className="bg-gray-100 text-sm outline-none"
                    value={countryCode}
                    onChange={handleCountryChange}
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+61">🇦🇺 +61</option>
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder={`Enter mobile number (${maxDigits} digits)`}
                  value={mobile}
                  onChange={handleMobileChange}
                  className="flex-1 px-3 py-2 text-sm outline-none"
                />
              </div>

              <button
                onClick={handleSendOtp}
                className="bg-black text-white w-full py-2 rounded hover:opacity-90 transition"
              >
                Continue
              </button>
            </div>
          )}

          {step === 'otp' && (
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-center">Enter OTP</h2>
              <p className="text-sm text-gray-500 text-center">
                We sent an OTP to your mobile number
              </p>

              <div className="flex justify-center gap-2 mt-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el!)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 border border-gray-300 rounded text-center text-lg focus:outline-none"
                    maxLength={1}
                  />
                ))}
              </div>

              <button
                onClick={handleVerifyOtp}
                className="bg-black text-white w-full py-2 rounded hover:opacity-90 transition mt-4"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 py-3 border-t">
          By continuing, you agree to our{' '}
          <a href="#" className="underline">
            Terms of Service
          </a>{' '}
          &{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup
