import React, { useState } from 'react'
import BannerImg from '../../../assets/Login/Banner/6313470.jpg'
import leftArrow from '../../../assets/icon/left-arrow_3849790.png' // adjust path
import rightArrow from '../../../assets/icon/right_3864793.png' // adjust path
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineCheckCircle } from 'react-icons/ai'
import { HiOutlineHome, HiOutlineDocument } from 'react-icons/hi'
import { RiBankLine, RiSecurePaymentLine } from 'react-icons/ri'
import { FiUpload, FiFile } from 'react-icons/fi'

const OrganizerRequestForm: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    address: '',
    pan: '',
    aadhaar: '',
    gstin: '',
    panFile: null as File | null,
    aadhaarFile: null as File | null,
    gstinFile: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files[0]) setFormData({ ...formData, [name]: files[0] })
  }

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1)
  }
  const handlePrev = () => setStep(step - 1)

  const validateStep = (currentStep: number) => {
    if (currentStep === 1)
      return !!(
        formData.name &&
        formData.businessName &&
        formData.email &&
        formData.phone &&
        formData.address
      )
    if (currentStep === 2) return !!(formData.pan && formData.aadhaar && formData.gstin)
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
  }

  const stepLabels = ['Personal & Business', 'Tax & ID Details', 'Document Upload']

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-md w-full text-center">
          <AiOutlineCheckCircle className="text-6xl text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            Thank you for providing your organizer details. Our team will review your application
            within 24 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold w-full hover:bg-orange transition-all duration-300"
          >
            Submit Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Banner */}
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Organizer Registration
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Join our platform and start creating amazing events. Complete your registration in three
            simple steps.
          </p>
        </div>
      </div>

      {/* Form Card - BELOW Banner */}
      <div className="max-w-5xl mx-auto  p-6 md:p-10 mt-10 relative z-20 borde">
        {/* Ensure fixed min-height for all steps */}
        <div className="min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex flex-col justify-between">
          {/* Step Indicator */}
          <div className="mb-6 px-2">
            <div className="flex items-center justify-between relative max-w-3xl mx-auto">
              <div className="absolute sm:top-1/3 top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full -translate-y-1/2"></div>
              <div
                className="absolute sm:top-1/3 top-1/2 left-0 h-1.5 bg-orange rounded-full -translate-y-1/2 transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
              {[1, 2, 3].map((s) => (
                <div key={s} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      step >= s
                        ? 'bg-orange-600 border-white text-white'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {step > s ? (
                      <AiOutlineCheckCircle className="text-base md:text-lg" />
                    ) : (
                      <span className="font-semibold text-sm md:text-base">{s}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs md:text-sm font-medium ${
                      step >= s ? 'text-gray-800' : 'text-gray-400'
                    } hidden sm:block`}
                  >
                    {stepLabels[s - 1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    Personal & Business Info
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Tell us about yourself and your business
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    name="name"
                    Icon={AiOutlineUser}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Business Name"
                    name="businessName"
                    Icon={RiBankLine}
                    placeholder="Your business name"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Email"
                    name="email"
                    Icon={AiOutlineMail}
                    placeholder="your@email.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Phone"
                    name="phone"
                    Icon={AiOutlinePhone}
                    placeholder="+91 12345 67890"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <TextareaField
                  label="Business Address"
                  name="address"
                  Icon={HiOutlineHome}
                  placeholder="Enter your complete business address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    Tax & ID Details
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Provide your business identification numbers
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="PAN Card Number"
                    name="pan"
                    placeholder="ABCDE1234F"
                    value={formData.pan}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Aadhaar Card Number"
                    name="aadhaar"
                    placeholder="1234 5678 9012"
                    value={formData.aadhaar}
                    onChange={handleChange}
                  />
                  <InputField
                    label="GSTIN Number"
                    name="gstin"
                    placeholder="07ABCDE1234F1Z5"
                    value={formData.gstin}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    Upload Documents
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Upload scanned copies of your documents
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { key: 'panFile', label: 'PAN Card' },
                    { key: 'aadhaarFile', label: 'Aadhaar Card' },
                    { key: 'gstinFile', label: 'GSTIN Certificate' },
                  ].map(({ key, label }) => (
                    <FileUpload
                      key={key}
                      label={label}
                      name={key as 'panFile' | 'aadhaarFile' | 'gstinFile'}
                      file={formData[key as 'panFile' | 'aadhaarFile' | 'gstinFile']}
                      onChange={handleFileChange}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200 mt-6 md:mt-10">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center justify-center text-gray-600 hover:text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-all gap-2"
                >
                  <img src={leftArrow} alt="Previous" className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center justify-center ml-auto border border-gray-600 py-2 px-6 rounded-lg font-semibold hover:bg-orange hover:text-white transition-all gap-2 group"
                >
                  <span>Continue</span>
                  <img
                    src={rightArrow}
                    alt="Next"
                    className="w-4 h-4 transition-all duration-300 group-hover:invert"
                  />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center justify-center ml-auto bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all gap-2"
                >
                  <AiOutlineCheckCircle />
                  <span>Submit</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Reusable Input Field
const InputField = ({ label, name, Icon, type = 'text', placeholder, value, onChange }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
      {Icon && <Icon className="text-orange-600" />}
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-100 transition-all"
      required
    />
  </div>
)

// Reusable Textarea
const TextareaField = ({ label, name, Icon, placeholder, value, onChange, rows }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
      {Icon && <Icon className="text-orange-600" />}
      {label}
    </label>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-100 transition-all resize-none"
      required
    />
  </div>
)

// Reusable File Upload
const FileUpload = ({ label, name, file, onChange }: any) => (
  <label
    className={`group cursor-pointer border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
      file ? 'border-green-400 bg-green-50' : 'border-gray-300'
    }`}
  >
    <div className="flex flex-col items-center">
      <div
        className={`p-3 rounded-lg mb-3 transition-colors ${
          file ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
        }`}
      >
        <FiFile className="text-2xl" />
      </div>
      <span className="font-semibold text-gray-800 mb-1">{label}</span>
      {file ? (
        <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
          <AiOutlineCheckCircle /> File Selected
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-sm group-hover:bg-gray-200 transition-colors">
          Choose File
        </div>
      )}
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
        required
      />
    </div>
  </label>
)

export default OrganizerRequestForm
