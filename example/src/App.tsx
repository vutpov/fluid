import { Button, Input, ToolTip, Link, Progress, Switch, Radio } from 'fluid'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Input
          labelPlaceHolder={'Username'}
          description={'Please Input Your Username'}
          errorMessage={'error'}
          // @ts-ignore
          allowClear={true}
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

        <div>
          <ToolTip content={'Tooltip'}>
            <Button>Hover</Button>
          </ToolTip>
        </div>

        <ToolTip content={'Tooltip'} trigger={'click'}>
          <Button>click</Button>
        </ToolTip>

        <div>
          <ToolTip content={'Tooltip'} placement={'left'}>
            <Button>left</Button>
          </ToolTip>
        </div>

        <ToolTip content={'Tooltip'} placement={'bottom'}>
          <Button>bottom</Button>
        </ToolTip>
      </div>

      <Link />
      <div
        style={{
          marginLeft: 100,
        }}
      >
        <ToolTip content={'Tooltip'} placement={'right'}>
          <Button>Right</Button>
        </ToolTip>
        <Button>Left</Button>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <ToolTip content={'Tooltip'} placement={'bottom'} trigger={'click'}>
          <Button>bottom</Button>
        </ToolTip>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
        }}
      >
        <ToolTip content={'Tooltip'} placement={'top'} trigger={'click'}>
          <Button>top</Button>
        </ToolTip>
      </div>

      <Progress value={60} label={'loading'} />

      <Switch
        style={{
          marginTop: 10,
        }}
      />
      <Switch
        style={{
          marginTop: 10,
        }}
        border={'round'}
      />

      <Radio.Group>
        <Radio value={'a'}>a</Radio>

        <Radio value={'b'}>b</Radio>
      </Radio.Group>

      <Radio.Group>
        <Radio.Button value={'a'}>a</Radio.Button>

        <Radio.Button value={'b'}>b</Radio.Button>
      </Radio.Group>

      <Radio.Group>
        <Radio.Button value={'a'}>a</Radio.Button>
        <Radio.Button value={'b'}>b</Radio.Button>
        <Radio.Button value={'c'}>c</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default App
