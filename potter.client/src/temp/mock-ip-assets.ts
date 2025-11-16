import { IntellectualPropertyAsset } from '../app/types';

const MOCK_IP_ASSETS: IntellectualPropertyAsset[] = [
  {
    id: 'IRN-2024-001',
    title: 'Method for Secure Data Encryption',
    client: 'Tech Solutions Inc.',
    type: 'Patent',
    description: 'A novel method for encrypting data using a dynamic key generation algorithm.',
    dateCreated: new Date('2025-11-16'),
  },
  {
    id: 'IRN-2024-002',
    title: 'ACME Innovate Logo',
    client: 'ACME LLP',
    type: 'Trade Mark',
    description: 'Registration for the new company logo and branding assets.',
    dateCreated: new Date('2025-10-01'),
  },
  // Add more data as needed
];

export default MOCK_IP_ASSETS;