<template>
	<el-row class="tac">
		<el-col>
			<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
				router>
				<el-sub-menu index="1">
					<template #title>
						<el-icon>
							<location />
						</el-icon>
						<span>測試</span>
					</template>
					<el-menu-item index="/Home/HelloWorld" route:default-active='/Home/HelloWorld.vue'>表單頁</el-menu-item>
					<el-menu-item index="/Home/UserQuery" route:default-active='/Home/UserQuery.vue'>用户查询</el-menu-item>
					<el-sub-menu index="1-3">
						<template #title>二級菜單3</template>
						<el-menu-item index="1-3-1">三級菜單1</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
				<el-menu-item index="2">
					<el-icon>
						<icon-menu />
					</el-icon>
					<span>一級菜單2</span>
				</el-menu-item>
				<el-menu-item index="3" disabled>
					<el-icon>
						<document />
					</el-icon>
					<span>一級菜單3</span>
				</el-menu-item>
				<el-menu-item index="4">
					<el-icon>
						<setting />
					</el-icon>
					<span>一級菜單4</span>
				</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
	import {
		Document,
		Menu as IconMenu,
		Location,
		Setting,
	} from '@element-plus/icons-vue'
	import { computed } from 'vue'
	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const openTab=computed(()=>{
		return this.$store.state.openTab
	})
	const activeIndex=computed({
		get () {
		  return this.$store.state.activeIndex
		},
		set (val) {
		  this.$store.commit('set_active_index', val)
		}
	})

</script>
