import logger from '../src/index.js';

logger.info('អ្នកទេសចរចុះឈ្មោះដោយជោគជ័យ', {
  visitorId: 172, name: 'សុខុន', location: 'ច្រកខាងត្បូង នៃអង្គរវត្ត'
});

logger.warn('ចំនួនអ្នកទស្សនាកើនឡើងខ្ពស់ជិតប្រាសាទបាគ័ន', {
  zone: 'ប្រាសាទបាគ័ន', count: 340, threshold: 300
});

logger.error('បរាជ័យក្នុងការផ្ទៀងផ្ទាត់សំបុត្រ', {
  ticketId: 'AWT-9981', reason: 'QR code ផុតកំណត់', scannedAt: 'ច្រកចូលអង្គរធំ'
});
