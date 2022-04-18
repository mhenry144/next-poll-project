import { useRecoilState } from 'recoil'
import { modalState, postIdState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'

function Modal() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 pt-8" onClose={setIsOpen}>
        <div className="flex min-h-[800px] items-start justify-center px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-2xl bg-black text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:align-middle"></div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
