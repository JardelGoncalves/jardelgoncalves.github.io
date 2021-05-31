export const LoadingLogo = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src="/images/logo.svg"
        alt="Logo"
        style={{
          animationName: 'loadingLogo',
          animationDuration: '2s',
          animationIterationCount: 'infinite',
          width: '6rem',
          height: 'auto'
        }}
      />
    </div>
  )
}
