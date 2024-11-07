import'./AdminC.css'
import Sidebar  from '../../../../Components/SideBar/SideBar'
function AdminC (){
    return(
        <>
        <Sidebar/>
        <div id="C">
                <Sidebar />
                <div id='BodyC'>
                    <div id="Tcerimonialista">
                        <h1>Cerimônialista</h1>
                    </div>
                    <div id="Ctabela">
                        <table id='cerimonialista'>
                            <td>Nome</td>
                            <td>Capital</td>
                            <td>Bandeira</td>
                            <td>Id</td>

                        </table>

                    </div>

                </div>

            </div>

   
                    
    
        </>
    )

}
export default AdminC