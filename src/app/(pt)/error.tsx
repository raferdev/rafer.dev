'use client'

import { NextErrorProps } from '@/@types/components'

import { ErrorView } from '../_layout/errorView'

const Error = (props: NextErrorProps) => <ErrorView {...props} locale="pt" />

export default Error
