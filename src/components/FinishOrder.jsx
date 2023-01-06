import { useContext, useState } from "react"
import { CartContext } from "../contexts/cart"
import Modal from 'react-modal'
import { MdDone } from 'react-icons/md'
import "../style/FinishOrder.css"

Modal.setAppElement('#root')

export default function FinishOrder() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { productsCart } = useContext(CartContext)
    const totalValue = productsCart.reduce((a, b) => a + (b['price'] * b['qtd'] || 0), 0)

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(20, 20, 20)',
            border: 'none',
            borderRadius: '5px',
            width: '30%',
        },
        overlay: {
            backgroundColor: 'rgba(10, 10, 10, 0.75)'
        }
    }

    const sectionStyle = {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-start'
    }

    return (
        <section style={sectionStyle}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}
            >
                <h2 style={{color: 'brown'}}>Itens</h2>

                {productsCart.map((item) => (
                    <div className="modal-item" key={item.id}>
                        <p>{item.name}</p>
                        <p>R$ {item.price * item.qtd}</p>
                    </div>
                ))}

                <h3 style={{marginTop: '15px'}}><span style={{color: 'brown'}}>Valor total: </span>R$ {totalValue}</h3>
            </Modal>

            <button onClick={openModal} disabled={productsCart <= 0} className="finish-order">
                <MdDone style={{ marginRight: '5px' }} /> Finalizar Pedido
            </button>
        </section>
    )
}