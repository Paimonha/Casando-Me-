import './AdminF.css'
import Sidebar from '../../../../Components/SideBar/SideBar'
fetch('./paises.json').then(pera => pera.json()).then(paises => MostrarPais(paises))

function MostrarPais(paises) {
    const tabela = document.querySelector('#fornecedores')

    paises.forEach(item => {
        tabela.innerHTML += `<tr>       <td>${item.id}</td>   <td>${item.name}</td>  <td><img src=${item.flag}></td> <td>${item.numericCode}</td> </tr>`
    });


}
function AdminF() {
    return (
        <>
            <div id="U">
                <Sidebar />
                <div id='Body'>
                    <div id="Tfornecedores">
                        <h1>Fornecedores</h1>
                    </div>
                    <div id="Ftabela">
                        <table id='fornecedores'>
                        <td>Id</td>
                            <td>Nome</td>
                            <td>Descrição</td>
                            <td>Contato</td>
                           

                        </table>

                    </div>

                </div>

            </div>

        </>
    )

}
export default AdminF