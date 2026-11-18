// Model confirmed by the owner through the supplied CellphoneS product link.
// Operating facts checked against Alpha Works D2's official manual, not a review.
export const rentalMicrophone = {
  verified: true,
  model: 'Alpha Works D2',
  ownerConfirmedModel: true,
  handheldBatteries: { size: 'AA', count: 2 },
  receiver: { chargePort: 'USB-C', outputJackMm: 6.35 },
  powerMethod: '2 AA batteries per handheld; receiver rechargeable via USB-C',
  receiverConnection:
    '6.35 mm receiver output to Stage 320 MIC input; microphone position if using MIC 2/GUITAR',
  pairingMethod:
    'Check automatic link first; if needed align IR windows and short-press matching CH-A/CH-B',
  prepairedAtHandover: null, // Owner has not stated that every rental is pre-paired.
  hardwareTested: false,
  ownerReference: 'https://cellphones.com.vn/micro-karaoke-alpha-works-d2.html',
  manualUrl:
    'https://www.alphaworksaudio.com/vi/_files/ugd/426e76_9beae4b067ca4d46bba987b57d7e5a87.pdf',
  verifiedAt: '2026-11-18',
}
