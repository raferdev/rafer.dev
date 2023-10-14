import { icons, LucideProps } from 'lucide-react'

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof icons
}
