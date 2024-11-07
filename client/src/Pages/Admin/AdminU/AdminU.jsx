import './AdminU.css'
import Sidebar from '../../../../Components/SideBar/SideBar'
function AdminU() {
    return (
        <> <div id="U">
            <Sidebar />
            <div id='BodyU'>
                <div id="Tusuario">
                    <h1>Usuario</h1>
                </div>
                <div id="Utabela">
                    <table id='usuario'>
                       <td>Id</td>
                        <td>Email</td>
                        <td>Senha</td>
                       

                    </table>

                </div>

            </div>

        </div>
        </>
    )

}
export default AdminU