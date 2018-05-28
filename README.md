# lapp component
基于lapp和Material Design 规范封装的组件。在线示例： https://chalecao.github.io/lapp-component/dist/index.html

# usage

```
import { l, app } from "lapp"
import { Badge, Icon, Button, Card, Chip, Layout, TabPanel, Checkbox, Radio, Switch, Loading, Tooltip, Textfield, DatetimePicker } from "lappComponent"

const BoxView = ({ props, children }) => (<div>
    <h3 class="f-b-b">Badge</h3>
    <Badge data="123" class="f-m-r">TEST</Badge>
    <Badge data="♥" class="f-m-r">Mood</Badge>
    <Badge data="♥" class="f-m-r" icon>account_box</Badge>
    <Badge data="♥" class="f-m-r" icon overlap>account_box</Badge>

    <h3 class="f-b-b">Icon <a href="https://material.io/tools/icons/?style=baseline" target="_blank">more</a></h3>
    <Icon title="3d_rotation" class="f-m-r">3d_rotation</Icon>
    <Icon title="alarm" class="f-m-r">alarm</Icon>
    <Icon title="android" class="f-m-r">android</Icon>
    <Icon title="favorite" class="f-m-r">favorite</Icon>
    <Icon title="add_circle" class="f-m-r">add_circle</Icon>
    <Icon title="cloud_queue">cloud_queue</Icon>

    <h3 class="f-b-b">Button</h3>
    <Button class="f-m-r">Button</Button>
    <Button class="f-m-r" ripple>Button</Button>
    <Button class="f-m-r" disabled>Button</Button>
    <Button class="f-m-r" primary>Button</Button>
    <Button class="f-m-r" accent>Button</Button>
    <Button class="f-m-r" accent raised>Button</Button>
    <Button class="f-m-r" fab>
        <Icon>add</Icon>
    </Button>
    <Button class="f-m-r" fab ripple>
        <Icon>add</Icon>
    </Button>
    <Button class="f-m-r" icon ripple>
        <Icon>mood</Icon>
    </Button>
    <Button class="f-m-r" icon ripple accent>
        <Icon>mood</Icon>
    </Button>

    <h3 class="f-b-b">Card</h3>
    <Card class="w-400 demo-card f-d-ib f-m-r" shadow title="标题" desc="介绍，描述等等">
        <Button accent ripple>Get Started</Button>
        <div class="mdl-card__menu">
            <Button icon accent ripple>
                <Icon>share</Icon>
            </Button>
        </div>
    </Card>
    <Card class="w-400 f-d-ib f-m-r" shadow title="标题" desc="介绍，描述等等">
        <Button accent ripple>Get Started</Button>
        <div class="mdl-card__menu">
            <Button icon accent ripple>
                <Icon>share</Icon>
            </Button>
        </div>
    </Card>
    <Card class="w-400 demo-card f-d-ib f-m-r" shadow title="标题"></Card>

    <h3 class="f-b-b">Chip</h3>
    <Chip contact class="f-m-r">
        <span class="mdl-color--teal mdl-color-text--white">A</span>
        <span class="f-vm fs-14"> Button Chip</span>
    </Chip>
    <Chip contact deletable class="f-m-r">
        <span>A</span>
        <span class="f-vm fs-14"> Button Chip</span>
        <span><Icon>share</Icon></span>
    </Chip>
    <Chip contact >
        <img class="mdl-chip__contact" src="https://getmdl.io/templates/dashboard/images/user.jpg"></img>
        <span class="f-vm fs-14"> Button Chip</span>
    </Chip>

    <h3 class="f-b-b">Input && Loading && Textfield && DatetimePicker</h3>
    <Checkbox checked label="是吗" class="f-d-ib" />
    <Radio value="1" checked label="是吗" class="f-d-ib" />
    <Switch checked label="是吗" class="f-d-ib" />
    <Textfield label="Text..."></Textfield>
    <Textfield pattern="-?[0-9]*(\.[0-9]+)?" label="Number..." errorTips="Input is not a number!"></Textfield>
    <Textfield label="Text..." floating-label></Textfield>
    <Textfield pattern="-?[0-9]*(\.[0-9]+)?" label="Number..." errorTips="Input is not a number!" floating-label></Textfield>
    <Textfield textarea label="Text..."></Textfield>
    <Textfield expandable label="Text...">
        <Button icon accent>
            <Icon>search</Icon>
        </Button>
    </Textfield>
    <br />
    <DatetimePicker></DatetimePicker>

    <br /><br />
    <Loading percent="30" />
    <br />
    <Loading indeterminate percent="0" />
    <br />
    <Loading pend="20" />


    <h3 class="f-b-b">Layout</h3>
    <div class="demo-layout-transparent">
        <Layout nav={[{
            url: "./",
            val: "组件"
        }, {
            url: "./",
            val: "模块"
        }, {
            url: "./",
            val: "关于"
        }]} title="LAPP" drawer>
            <Button accent ripple>Get Started</Button>
        </Layout>
    </div>
    <br />
    <div class="demo-tabpanel">
        <TabPanel tabs={[{
            val: "组件",
            cls: "is-active"
        }, {
            val: "模块"
        }, {
            val: "关于"
        }]} title="tabs" fixed >
            <div class="tab-content">
                tab1
            </div>
            <div class="tab-content">
                tab2
            </div>
            <div class="tab-content">
                tab3
            </div>
        </TabPanel>
    </div>

    <h3 class="f-b-b">Tooltip</h3>
    <Icon title="cloud_queue" class="l-upload f-m-r">cloud_queue</Icon>
    <Tooltip for=".l-upload">
        Upload <strong>file.zip</strong>
    </Tooltip>
    <Icon title="cloud_queue" class="f-m-r" id="l-upload-right" >cloud_queue</Icon>
    <Tooltip for="l-upload-right" right>
        Share your content<br />via social media
    </Tooltip>
    <span class="f-m-r" id="l-upload-top" >Tips top</span>
    <Tooltip for="l-upload-top" top>
        Share your content<br />via social media
    </Tooltip>
    <span class="f-m-r" id="l-upload-left" >Tips left</span>
    <Tooltip for="l-upload-left" left>
        Share your content<br />via social media
    </Tooltip>
</div>
)

console.time("render virtual DOM with FP")
app(document.querySelector("#app"), BoxView)
console.timeEnd("render virtual DOM with FP")



```
