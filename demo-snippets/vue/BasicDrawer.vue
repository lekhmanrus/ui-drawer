<template>
    <Page>
        <ActionBar>
            <Label text="Basic Drawer" />
        </ActionBar>

        <Drawer ref="drawer">
            <GridLayout ~leftDrawer class="drawer" width="300" backgroundColor="white" rows="auto, *">
                <StackLayout row="0">
                    <StackLayout backgroundColor="#eeeeee" padding="25">
                        <GridLayout columns="80, *" height="100">
                            <StackLayout col="0" class="avatar">
                                <Label text="JS" />
                            </StackLayout>
                        </GridLayout>
                        <StackLayout>
                            <Label text="John Smith" fontWeight="bold" />
                            <Label text="john.smith@example.com" />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout>
                        <Button text="My Profile" @tap="onCloseDrawer" />
                        <Button text="Settings" @tap="onCloseDrawer" />
                        <Button text="Rate Us" @tap="onCloseDrawer" />
                        <Button text="Support" @tap="onCloseDrawer" />
                        <Button text="Contact" @tap="onCloseDrawer" />
                    </StackLayout>
                </StackLayout>
            </GridLayout>

            <StackLayout ~mainContent backgroundColor="white">
                <Button @tap="onOpenDrawer" text="Open Drawer" width="250" marginTop="25" />
            </StackLayout>
        </Drawer>
    </Page>
</template>

<script lang="typescript">
export default {
    computed: {
        message() {
            return 'Blank {N}-Vue app';
        }
    },
    methods: {
        onOpenDrawer() {
            this.$refs['drawer'].open('left');
        },
        onCloseDrawer() {
            this.$refs['drawer'].close('left');
        }
    }
};
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
    color: white;
}
Button {
    background-color: #42b883;
    color: white;
}
.avatar {
    background-color: #42b883;
    border-radius: 40;
    height: 80;
    vertical-align: middle;
    Label {
        vertical-align: middle;
        horizontal-align: center;
        font-size: 30;
        color: white;
    }
}
.drawer {
    Button {
        background-color: transparent;
        margin: 0;
        padding: 0;
        border-color: #ccc;
        z-index: 0;
        border-width: 0 0 0.5 0;
        color: #222222;
        text-align: left;
        padding-left: 25;
        height: 50;
        font-size: 14;
    }
    Button:highlighted {
        background-color: #eeeeee;
        color: #222222;
    }
}
</style>
