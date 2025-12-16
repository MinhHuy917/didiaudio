'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Phone, MapPin, Calendar, CreditCard, Truck, Music, Play } from 'lucide-react'

interface BookingData {
  name: string
  phone: string
  address: string
  rentalDate: string
  rentalDays: number
  deliveryMethod: 'pickup' | 'delivery'
  paymentMethod: 'cod' | 'bank_transfer'
}

interface BookingFlowProps {
  productId: string
  productName: string
  productPrice: number
  onClose: () => void
}

export default function BookingFlow({ productId, productName, productPrice, onClose }: BookingFlowProps) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    phone: '',
    address: '',
    rentalDate: '',
    rentalDays: 1,
    deliveryMethod: 'delivery',
    paymentMethod: 'cod',
  })

  const totalPrice = productPrice * bookingData.rentalDays
  const deliveryFee = bookingData.deliveryMethod === 'delivery' ? 50 : 0
  const finalTotal = totalPrice + deliveryFee

  const handleNext = () => {
    if (step === 1) {
      if (bookingData.name && bookingData.phone && bookingData.address) {
        setStep(2)
      }
    } else if (step === 2) {
      if (bookingData.rentalDate) {
        setStep(3)
      }
    }
  }

  const handleSubmit = () => {
    // Tạo message cho Zalo/Facebook
    const message = `Đặt thuê loa: ${productName}
Tên: ${bookingData.name}
SĐT: ${bookingData.phone}
Địa chỉ: ${bookingData.address}
Ngày thuê: ${bookingData.rentalDate}
Số ngày: ${bookingData.rentalDays}
Giao hàng: ${bookingData.deliveryMethod === 'delivery' ? 'Giao tận nơi' : 'Tự lấy'}
Thanh toán: ${bookingData.paymentMethod === 'cod' ? 'COD' : 'Chuyển khoản'}
Tổng tiền: ${finalTotal}k`

    // Mở Zalo hoặc Facebook Messenger
    const zaloUrl = `https://zalo.me/0339197917?text=${encodeURIComponent(message)}`
    window.open(zaloUrl, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-black text-white">Đặt Thuê Loa</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 p-6 border-b border-white/10 bg-white/5">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 border border-white/20 text-gray-400'
                }`}
              >
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-1 mx-2 transition-all ${
                    step > s ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Thông tin liên hệ */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    Họ tên *
                  </label>
                  <input
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="Nhập họ tên"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    placeholder="0339197917"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    Địa chỉ giao/nhận *
                  </label>
                  <textarea
                    value={bookingData.address}
                    onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                    placeholder="Nhập địa chỉ chi tiết"
                    rows={3}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 resize-none transition-all"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Thời gian thuê */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    Ngày bắt đầu thuê *
                  </label>
                  <input
                    type="date"
                    value={bookingData.rentalDate}
                    onChange={(e) => setBookingData({ ...bookingData, rentalDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Số ngày thuê</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          rentalDays: Math.max(1, bookingData.rentalDays - 1),
                        })
                      }
                      className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-white w-12 text-center">{bookingData.rentalDays}</span>
                    <button
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          rentalDays: bookingData.rentalDays + 1,
                        })
                      }
                      className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                    >
                      +
                    </button>
                    <span className="text-white ml-4">ngày</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Từ ngày thứ 2: {Math.floor(productPrice * 0.5)}k/ngày
                  </p>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-cyan-400" />
                    Phương thức giao hàng
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setBookingData({ ...bookingData, deliveryMethod: 'delivery' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        bookingData.deliveryMethod === 'delivery'
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-black/50 hover:border-cyan-500/50'
                      }`}
                    >
                      <Truck className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                      <p className="text-white font-semibold">Giao tận nơi</p>
                      <p className="text-xs text-gray-400 mt-1">+50k phí ship</p>
                    </button>
                    <button
                      onClick={() => setBookingData({ ...bookingData, deliveryMethod: 'pickup' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        bookingData.deliveryMethod === 'pickup'
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-black/50 hover:border-cyan-500/50'
                      }`}
                    >
                      <MapPin className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                      <p className="text-white font-semibold">Tự lấy</p>
                      <p className="text-xs text-gray-400 mt-1">Miễn phí</p>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Thanh toán */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-cyan-400" />
                    Phương thức thanh toán
                  </label>
                  <div className="space-y-3">
                    <button
                      onClick={() => setBookingData({ ...bookingData, paymentMethod: 'cod' })}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        bookingData.paymentMethod === 'cod'
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-black/50 hover:border-cyan-500/50'
                      }`}
                    >
                      <p className="text-white font-semibold">Thanh toán khi nhận hàng (COD)</p>
                      <p className="text-xs text-gray-400 mt-1">Thanh toán khi nhận loa</p>
                    </button>
                    <button
                      onClick={() => setBookingData({ ...bookingData, paymentMethod: 'bank_transfer' })}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        bookingData.paymentMethod === 'bank_transfer'
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-black/50 hover:border-cyan-500/50'
                      }`}
                    >
                      <p className="text-white font-semibold">Chuyển khoản ngân hàng</p>
                      <p className="text-xs text-gray-400 mt-1">Chuyển khoản trước khi nhận loa</p>
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-black/50 rounded-xl p-6 space-y-3 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Music className="w-5 h-5 text-cyan-400" />
                    Tóm tắt đơn hàng
                  </h3>
                  <div className="flex justify-between text-white">
                    <span>{productName}</span>
                    <span>{productPrice}k/ngày</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Số ngày: {bookingData.rentalDays}</span>
                    <span>{totalPrice}k</span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>Phí giao hàng</span>
                      <span>{deliveryFee}k</span>
                    </div>
                  )}
                  <div className="border-t border-white/10 pt-3 mt-3">
                    <div className="flex justify-between text-white font-bold text-xl">
                      <span>Tổng cộng</span>
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{finalTotal}k</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-white/10 bg-white/5">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              Quay lại
            </button>
          )}
          <div className="flex-1" />
          {step < 3 ? (
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && (!bookingData.name || !bookingData.phone || !bookingData.address)) ||
                (step === 2 && !bookingData.rentalDate)
              }
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Tiếp tục
              <Play className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              Hoàn tất đặt hàng
              <Play className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
