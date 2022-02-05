interface IContainerWrapper {
    children: React.ReactNode
}

const ContainerWrapper = ({children}: IContainerWrapper) => {
    return <div>{children}</div>;
}

export default ContainerWrapper;