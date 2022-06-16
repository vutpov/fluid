import { Button, Input, ToolTip } from 'fluid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input
          labelPlaceHolder={'Username'}
          description={'Please Input Your Username'}
          errorMessage={'error'}
        />
        <Button
          onMouseEnter={(e) => {
            console.log('focus')
          }}
          onMouseOver={(e) => {
            console.log('focus')
          }}
        >
          Button
        </Button>

        <ToolTip content={'Tooltip'}>
          <Button>Hover</Button>
        </ToolTip>

        <ToolTip content={'Tooltip'} trigger={'click'}>
          <Button>click</Button>
        </ToolTip>
      </header>
    </div>
  )
}

export default App
