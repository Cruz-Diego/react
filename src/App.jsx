import Card from "./ components/card"
import Button from "./ components/button"

export default function App() {

  return (
    <>
    <div className="head">
      <div className="headText">
        <h1>Vite</h1>
        <h1>Next Generation Frontend Tooling</h1>
        <p>Get ready for a development environment that can finally catch up with you.</p>
          <div className="conteinerButtons">
            <Button content="Get Started"/>
            <Button content="Why Vite?"/>
           <Button content="View on GitHub"/>
          </div>
      </div>
        <img className="logo" src="https://vitejs.dev/logo-with-shadow.png" alt="" />
    </div>
    <section className="conteinerCards">
      <Card emoji='💡' title='Instant Server Start' content='On demand file serving over native ESM, no bundling required!'/>
      <Card emoji='⚡' title='Lightning Fast HMR' content='Hot Module Replacement (HMR) that stays fast regardless of app size.'/>
      <Card emoji='🛠' title='Rich Features' content='Out-of-the-box support for TypeScript, JSX, CSS and more.'/>
      <Card emoji='📦' title='Optimized Build' content='Pre-configured Rollup build with multi-page and library mode support.'/>
      <Card emoji='🔩' title='Universal Plugins' content='Rollup-superset plugin interface shared between dev and build.'/>
      <Card emoji='🔑' title='Fully Typed APIs' content='Flexible programmatic APIs with full TypeScript typing.'/>
    </section>
    </>
  )
}

