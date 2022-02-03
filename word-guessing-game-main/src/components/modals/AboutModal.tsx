import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source AFL/VFL themed word guessing game -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        Thanks to @kunaljoshi for creating Nurdle and giving the inspiration.
      </p>
    </BaseModal>
  )
}
