import HeaderContentLayout from "./HeaderContentLayout";
import HeaderWithSiderContentLayout from "./HeaderWithSiderContentLayout";

const BaseLayout = ({children}) =>{
    return (
        <>
            {
                children.props.showSider ? (
                    <HeaderWithSiderContentLayout>{children}</HeaderWithSiderContentLayout>
                ): (
                    <HeaderContentLayout>{children}</HeaderContentLayout>
                )
            }
        </>
    );
}

export default BaseLayout;