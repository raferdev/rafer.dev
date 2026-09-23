import { privacy } from '@/config/privacy'
import { policyMetadata, PolicyPage } from '@/components/Policy'

const metadata = policyMetadata(privacy.pt)

const PrivacidadePage = () => <PolicyPage policy={privacy.pt} />

export { metadata }

export default PrivacidadePage
