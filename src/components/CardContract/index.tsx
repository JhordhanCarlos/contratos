import { useEffect, useState } from 'react';
import './styles.css'

const dados:Contrato[] = [
    {
      "identificador": "CT-001",
      "nomeDoContrato": "Manutenção TI",
      "clienteFornecedor": "ABC Ltda.",
      "dataDeInicio": "15/01/2023",
      "dataDeVencimento": "15/01/2025",
      "status": "Ativo",
      "valorDoContrato": "R$ 150.000,00",
      "tipoDeContrato": "Serviço"
    },
    {
      "identificador": "CT-002",
      "nomeDoContrato": "Fornecimento Materiais",
      "clienteFornecedor": "XYZ S.A.",
      "dataDeInicio": "10/06/2022",
      "dataDeVencimento": "10/06/2024",
      "status": "Expirado",
      "valorDoContrato": "R$ 200.000,00",
      "tipoDeContrato": "Fornecimento"
    },
    {
      "identificador": "CT-003",
      "nomeDoContrato": "Consultoria Financeira",
      "clienteFornecedor": "123 Consulting",
      "dataDeInicio": "01/09/2023",
      "dataDeVencimento": "01/09/2024",
      "status": "Pendente de Renovação",
      "valorDoContrato": "R$ 100.000,00",
      "tipoDeContrato": "Consultoria"
    },
    {
      "identificador": "CT-004",
      "nomeDoContrato": "Desenvolvimento Web",
      "clienteFornecedor": "Empresa Beta",
      "dataDeInicio": "20/02/2024",
      "dataDeVencimento": "20/02/2026",
      "status": "Ativo",
      "valorDoContrato": "R$ 300.000,00",
      "tipoDeContrato": "Serviço"
    },
    {
      "identificador": "CT-005",
      "nomeDoContrato": "Suporte Técnico",
      "clienteFornecedor": "Fornecedor Z",
      "dataDeInicio": "01/07/2023",
      "dataDeVencimento": "01/07/2024",
      "status": "Próximo ao Vencimento",
      "valorDoContrato": "R$ 80.000,00",
      "tipoDeContrato": "Fornecimento"
    },
    {
      "identificador": "CT-006",
      "nomeDoContrato": "Software ERP",
      "clienteFornecedor": "Tech Solutions",
      "dataDeInicio": "10/12/2022",
      "dataDeVencimento": "10/12/2024",
      "status": "Ativo",
      "valorDoContrato": "R$ 250.000,00",
      "tipoDeContrato": "TI"
    },
    {
      "identificador": "CT-007",
      "nomeDoContrato": "Consultoria RH",
      "clienteFornecedor": "Alpha Corp.",
      "dataDeInicio": "05/05/2023",
      "dataDeVencimento": "05/05/2025",
      "status": "Ativo",
      "valorDoContrato": "R$ 175.000,00",
      "tipoDeContrato": "Consultoria"
    },
    {
      "identificador": "CT-008",
      "nomeDoContrato": "Treinamento TI",
      "clienteFornecedor": "Delta Group",
      "dataDeInicio": "15/08/2023",
      "dataDeVencimento": "15/08/2024",
      "status": "Próximo ao Vencimento",
      "valorDoContrato": "R$ 90.000,00",
      "tipoDeContrato": "Serviço"
    },
    {
      "identificador": "CT-009",
      "nomeDoContrato": "Segurança Digital",
      "clienteFornecedor": "Beta Tech",
      "dataDeInicio": "25/11/2023",
      "dataDeVencimento": "25/11/2025",
      "status": "Ativo",
      "valorDoContrato": "R$ 120.000,00",
      "tipoDeContrato": "TI"
    },
    {
      "identificador": "CT-010",
      "nomeDoContrato": "Logística e Transporte",
      "clienteFornecedor": "Global Partners",
      "dataDeInicio": "30/09/2021",
      "dataDeVencimento": "30/09/2023",
      "status": "Expirado",
      "valorDoContrato": "R$ 210.000,00",
      "tipoDeContrato": "Fornecimento"
    },
    {
      "identificador": "CT-011",
      "nomeDoContrato": "Auditoria Fiscal",
      "clienteFornecedor": "Compliance Corp",
      "dataDeInicio": "20/04/2023",
      "dataDeVencimento": "20/04/2024",
      "status": "Próximo ao Vencimento",
      "valorDoContrato": "R$ 95.000,00",
      "tipoDeContrato": "Consultoria"
    },
    {
      "identificador": "CT-012",
      "nomeDoContrato": "Infraestrutura Cloud",
      "clienteFornecedor": "CloudTech Ltda.",
      "dataDeInicio": "15/06/2023",
      "dataDeVencimento": "15/06/2025",
      "status": "Ativo",
      "valorDoContrato": "R$ 320.000,00",
      "tipoDeContrato": "TI"
    },
    {
      "identificador": "CT-013",
      "nomeDoContrato": "Fornecimento de Hardware",
      "clienteFornecedor": "Hardware Solutions",
      "dataDeInicio": "01/10/2022",
      "dataDeVencimento": "01/10/2024",
      "status": "Pendente de Renovação",
      "valorDoContrato": "R$ 180.000,00",
      "tipoDeContrato": "Fornecimento"
    },
    {
      "identificador": "CT-014",
      "nomeDoContrato": "Consultoria Estratégica",
      "clienteFornecedor": "Strategy Experts",
      "dataDeInicio": "10/12/2023",
      "dataDeVencimento": "10/12/2026",
      "status": "Ativo",
      "valorDoContrato": "R$ 400.000,00",
      "tipoDeContrato": "Consultoria"
    },
    {
      "identificador": "CT-015",
      "nomeDoContrato": "Manutenção Predial",
      "clienteFornecedor": "BuildTech",
      "dataDeInicio": "15/02/2023",
      "dataDeVencimento": "15/02/2024",
      "status": "Expirado",
      "valorDoContrato": "R$ 220.000,00",
      "tipoDeContrato": "Serviço"
    }
  ]
  ;

  type Contrato = {
    identificador: string;
    nomeDoContrato: string;
    clienteFornecedor: string;
    dataDeInicio: string;
    dataDeVencimento: string;
    status: "Ativo" | "Expirado" | "Pendente de Renovação" | "Próximo ao Vencimento";
    valorDoContrato: string;
    tipoDeContrato: "Serviço" | "Fornecimento" | "Consultoria"| "TI";
  };
  
  
export function CardContract(){
    const [modalOpen, setModalOpen] = useState(false);
    const [detailInfo, setDetailsInfo] = useState<any>({})

    function handleDetails(info:any){
        
        setModalOpen(!modalOpen)
        setDetailsInfo(info);
    }

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
    return(
        <>
        
        {
            dados.map((item:Contrato)  => (
                <div key={item.identificador} className='cardContainer'>
                    <div className='cardHeader'>
                        <label>{item.identificador}</label>
                        <label>{item.status}</label>
                    </div>
                    <div className='cardBody'>
                        <label>Nome do Contrato:</label>
                        <label>{item.nomeDoContrato}</label>
                    </div>
                    <button className='cardButton' onClick={() => handleDetails(item)}>Ver Detalhes</button>
                </div>
            ))
        }

        <dialog className='modal' open={modalOpen}>
            <p><strong>ID:</strong> {detailInfo.identificador}</p>
            <div>
                <p><strong>Nome:</strong> {detailInfo.nomeDoContrato}</p>
                <p><strong>Cliente/Fornecedor:</strong> {detailInfo.clienteFornecedor}</p>
            </div>
            <div>
                <p><strong>Início:</strong> {detailInfo.dataDeInicio}</p>
                <p><strong>Vencimento:</strong> {detailInfo.dataDeVencimento}</p>
            </div>
            <div>
                <p><strong>Status:</strong> {detailInfo.status}</p>
                <p><strong>Valor:</strong> {detailInfo.valorDoContrato}</p>
                <p><strong>Tipo:</strong> {detailInfo.tipoDeContrato}</p>
            </div>
            <button className='cardButton' onClick={() => (setModalOpen(false), setDetailsInfo({}))}>Limpar</button> 
        </dialog>
        </>
    )
}