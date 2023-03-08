import React from 'react'
import useModalStore from '../../utils/stores/useModalStore'

const InvisibleModalWrap = ({modalId, children, showAtLarge, mobileModal, isModalOpen, setIsModalOpen}) => {

  const closeModalState = useModalStore(state=>state.closeModalState)

  const handleModalClose = () => {
    closeModalState()
    setIsModalOpen(false)
  }

  return (
    <div id={modalId} className={`modal transition-all ease-in-out duration-500 ${isModalOpen ? '' : 'scale-50 opacity-0 invisible'} bg-black/30 backdrop-blur-sm z-50 w-full fixed top-0 left-0 h-full flex flex-col items-center py-20 overflow-y-auto`}>
        <div data-modal-close={modalId} onClick={handleModalClose} className='cursor-pointer modal-closer w-full h-full fixed top-0 left-0 z-30'></div>
        {children}
    </div>
  )
}

export default InvisibleModalWrap