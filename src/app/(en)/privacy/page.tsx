import { privacy } from '@/config/privacy'
import { policyMetadata, PolicyPage } from '@/components/Policy'

const metadata = policyMetadata(privacy.en)

const PrivacyPage = () => <PolicyPage policy={privacy.en} />

export { metadata }

export default PrivacyPage
