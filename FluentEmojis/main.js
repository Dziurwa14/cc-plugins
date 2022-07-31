import { findByProps, findByPropsAll } from '@cumcord/modules/webpack';
import { injectCSS } from "@cumcord/patcher";

export default () => {
    let Fluent
    return {
      onLoad() {
        var a = new Set(["™", "™️", "©", "©️", "®", "®️"]),
        emojis = ["1f004","1f0cf","1f170-fe0f","1f171-fe0f","1f17e-fe0f","1f17f-fe0f","1f18e","1f191","1f192","1f193","1f194","1f195","1f196","1f197","1f198","1f199","1f19a","1f201","1f202-fe0f","1f21a","1f22f","1f232","1f233","1f234","1f235","1f236","1f237-fe0f","1f238","1f239","1f23a","1f250","1f251","1f300","1f301","1f302","1f303","1f304","1f305","1f306","1f307","1f308","1f309","1f30a","1f30b","1f30c","1f30d","1f30e","1f30f","1f310","1f311","1f312","1f313","1f314","1f315","1f316","1f317","1f318","1f319","1f31a","1f31b","1f31c","1f31d","1f31e","1f31f","1f320","1f321-fe0f","1f324-fe0f","1f325-fe0f","1f326-fe0f","1f327-fe0f","1f328-fe0f","1f329-fe0f","1f32a-fe0f","1f32b-fe0f","1f32c-fe0f","1f32d","1f32e","1f32f","1f330","1f331","1f332","1f333","1f334","1f335","1f336-fe0f","1f337","1f338","1f339","1f33a","1f33b","1f33c","1f33d","1f33e","1f33f","1f340","1f341","1f342","1f344","1f345","1f346","1f347","1f348","1f349","1f34a","1f34b","1f34c","1f34d","1f34e","1f34f","1f350","1f351","1f352","1f353","1f354","1f355","1f356","1f357","1f358","1f359","1f35a","1f35b","1f35c","1f35d","1f35e","1f35f","1f360","1f361","1f362","1f363","1f364","1f365","1f366","1f367","1f368","1f369","1f36a","1f36b","1f36c","1f36d","1f36e","1f36f","1f370","1f371","1f372","1f373","1f374","1f375","1f376","1f377","1f378","1f379","1f37a","1f37b","1f37c","1f37d-fe0f","1f37e","1f37f","1f380","1f381","1f382","1f383","1f384","1f385","1f386","1f387","1f388","1f389","1f38a","1f38b","1f38c","1f38d","1f38e","1f38f","1f390","1f391","1f392","1f393","1f396-fe0f","1f397-fe0f","1f399-fe0f","1f39a-fe0f","1f39b-fe0f","1f39e-fe0f","1f39f-fe0f","1f3a0","1f3a1","1f3a2","1f3a3","1f3a4","1f3a5","1f3a6","1f3a7","1f3a8","1f3a9","1f3aa","1f3ab","1f3ac","1f3ad","1f3ae","1f3af","1f3b0","1f3b1","1f3b2","1f3b3","1f3b4","1f3b5","1f3b6","1f3b7","1f3b8","1f3b9","1f3ba","1f3bb","1f3bc","1f3bd","1f3be","1f3bf","1f3c0","1f3c1","1f3c2","1f3c3-200d-2640-fe0f","1f3c3-200d-2642-fe0f","1f3c3","1f3c4-200d-2640-fe0f","1f3c4-200d-2642-fe0f","1f3c4","1f3c5","1f3c6","1f3c7","1f3c8","1f3c9","1f3ca-200d-2640-fe0f","1f3ca-200d-2642-fe0f","1f3ca","1f3cb-fe0f-200d-2640-fe0f","1f3cb-fe0f-200d-2642-fe0f","1f3cb-fe0f","1f3cc-fe0f-200d-2640-fe0f","1f3cc-fe0f-200d-2642-fe0f","1f3cc-fe0f","1f3cd-fe0f","1f3ce-fe0f","1f3cf","1f3d0","1f3d1","1f3d2","1f3d3","1f3d4-fe0f","1f3d5-fe0f","1f3d6-fe0f","1f3d7-fe0f","1f3d8-fe0f","1f3d9-fe0f","1f3da-fe0f","1f3db-fe0f","1f3dc-fe0f","1f3dd-fe0f","1f3de-fe0f","1f3df-fe0f","1f3e0","1f3e1","1f3e2","1f3e3","1f3e4","1f3e5","1f3e6","1f3e7","1f3e8","1f3e9","1f3ea","1f3eb","1f3ec","1f3ed","1f3ee","1f3ef","1f3f0","1f3f3-fe0f","1f3f4-200d-2620-fe0f","1f3f4","1f3f5-fe0f","1f3f7-fe0f","1f3f8","1f3f9","1f3fa","1f400","1f401","1f402","1f403","1f404","1f405","1f406","1f407","1f408-200d-2b1b","1f408","1f409","1f40a","1f40b","1f40c","1f40d","1f40e","1f40f","1f410","1f411","1f412","1f413","1f414","1f415-200d-1f9ba","1f415","1f416","1f417","1f418","1f419","1f41a","1f41b","1f41c","1f41d","1f41e","1f41f","1f420","1f421","1f422","1f423","1f424","1f425","1f426","1f427","1f428","1f429","1f42a","1f42b","1f42c","1f42d","1f42e","1f42f","1f430","1f431","1f432","1f433","1f434","1f435","1f436","1f437","1f438","1f439","1f43a","1f43b-200d-2744-fe0f","1f43b","1f43c","1f43d","1f43e","1f43f-fe0f","1f440","1f441-fe0f-200d-1f5e8-fe0f","1f441-fe0f","1f442","1f443","1f444","1f445","1f446","1f447","1f448","1f449","1f44a","1f44b","1f44c","1f44d","1f44e","1f44f","1f450","1f451","1f452","1f453","1f454","1f455","1f456","1f457","1f458","1f459","1f45a","1f45b","1f45c","1f45d","1f45e","1f45f","1f460","1f461","1f462","1f463","1f464","1f465","1f466","1f467","1f468-200d-1f33e","1f468-200d-1f373","1f468-200d-1f37c","1f468-200d-1f393","1f468-200d-1f3a4","1f468-200d-1f3a8","1f468-200d-1f3eb","1f468-200d-1f3ed","1f468-200d-1f466-200d-1f466","1f468-200d-1f466","1f468-200d-1f467-200d-1f466","1f468-200d-1f467-200d-1f467","1f468-200d-1f467","1f468-200d-1f468-200d-1f466-200d-1f466","1f468-200d-1f468-200d-1f466","1f468-200d-1f468-200d-1f467-200d-1f467","1f468-200d-1f468-200d-1f467","1f468-200d-1f469-200d-1f466-200d-1f466","1f468-200d-1f469-200d-1f466","1f468-200d-1f469-200d-1f467-200d-1f466","1f468-200d-1f469-200d-1f467-200d-1f467","1f468-200d-1f469-200d-1f467","1f468-200d-1f4bb","1f468-200d-1f4bc","1f468-200d-1f527","1f468-200d-1f52c","1f468-200d-1f680","1f468-200d-1f692","1f468-200d-1f9af","1f468-200d-1f9b0","1f468-200d-1f9b1","1f468-200d-1f9b2","1f468-200d-1f9b3","1f468-200d-1f9bc","1f468-200d-1f9bd","1f468-200d-2695-fe0f","1f468-200d-2696-fe0f","1f468-200d-2708-fe0f","1f468-200d-2764-fe0f-200d-1f468","1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","1f469-200d-1f33e","1f469-200d-1f373","1f469-200d-1f37c","1f469-200d-1f393","1f469-200d-1f3a4","1f469-200d-1f3a8","1f469-200d-1f3eb","1f469-200d-1f3ed","1f469-200d-1f466-200d-1f466","1f469-200d-1f466","1f469-200d-1f467-200d-1f466","1f469-200d-1f467-200d-1f467","1f469-200d-1f467","1f469-200d-1f469-200d-1f466-200d-1f466","1f469-200d-1f469-200d-1f466","1f469-200d-1f469-200d-1f467-200d-1f467","1f469-200d-1f469-200d-1f467","1f469-200d-1f4bb","1f469-200d-1f4bc","1f469-200d-1f527","1f469-200d-1f52c","1f469-200d-1f680","1f469-200d-1f692","1f469-200d-1f9af","1f469-200d-1f9b0","1f469-200d-1f9b1","1f469-200d-1f9b2","1f469-200d-1f9b3","1f469-200d-1f9bc","1f469-200d-1f9bd","1f469-200d-2695-fe0f","1f469-200d-2696-fe0f","1f469-200d-2764-fe0f-200d-1f468","1f469-200d-2764-fe0f-200d-1f469","1f469-200d-2764-fe0f-200d-1f48b-200d-1f468","1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","1f469","1f46a","1f46b","1f46c","1f46d","1f46e-200d-2640-fe0f","1f46e-200d-2642-fe0f","1f46e","1f46f-200d-2640-fe0f","1f46f-200d-2642-fe0f","1f46f","1f470-200d-2640-fe0f","1f470-200d-2642-fe0f","1f470","1f471-200d-2640-fe0f","1f471-200d-2642-fe0f","1f471","1f472","1f473-200d-2640-fe0f","1f473-200d-2642-fe0f","1f473","1f474","1f475","1f476","1f477-200d-2640-fe0f","1f477-200d-2642-fe0f","1f477","1f478","1f479","1f47a","1f47b","1f47c","1f47d","1f47e","1f47f","1f480","1f481-200d-2640-fe0f","1f481-200d-2642-fe0f","1f481","1f482-200d-2640-fe0f","1f482-200d-2642-fe0f","1f482","1f483","1f484","1f485","1f486-200d-2640-fe0f","1f486-200d-2642-fe0f","1f486","1f487-200d-2640-fe0f","1f487-200d-2642-fe0f","1f487","1f488","1f489","1f48a","1f48b","1f48c","1f48d","1f48e","1f48f","1f490","1f491","1f492","1f493","1f494","1f495","1f496","1f497","1f498","1f499","1f49a","1f49b","1f49c","1f49d","1f49e","1f49f","1f4a0","1f4a1","1f4a2","1f4a3","1f4a4","1f4a5","1f4a6","1f4a7","1f4a8","1f4a9","1f4aa","1f4ab","1f4ac","1f4ad","1f4ae","1f4af","1f4b0","1f4b1","1f4b2","1f4b3","1f4b4","1f4b5","1f4b6","1f4b7","1f4b8","1f4b9","1f4ba","1f4bb","1f4bc","1f4bd","1f4be","1f4bf","1f4c0","1f4c1","1f4c2","1f4c3","1f4c4","1f4c5","1f4c6","1f4c7","1f4c8","1f4c9","1f4ca","1f4cb","1f4cc","1f4cd","1f4ce","1f4cf","1f4d0","1f4d1","1f4d2","1f4d3","1f4d4","1f4d5","1f4d6","1f4d7","1f4d8","1f4d9","1f4da","1f4db","1f4dc","1f4dd","1f4de","1f4df","1f4e0","1f4e1","1f4e2","1f4e3","1f4e4","1f4e5","1f4e6","1f4e7","1f4e8","1f4e9","1f4ea","1f4eb","1f4ec","1f4ed","1f4ee","1f4ef","1f4f0","1f4f1","1f4f2","1f4f3","1f4f4","1f4f5","1f4f6","1f4f7","1f4f8","1f4f9","1f4fa","1f4fb","1f4fc","1f4fd-fe0f","1f4ff","1f500","1f501","1f502","1f503","1f504","1f505","1f506","1f507","1f508","1f509","1f50a","1f50b","1f50c","1f50d","1f50e","1f50f","1f510","1f511","1f512","1f513","1f514","1f515","1f516","1f517","1f518","1f519","1f51a","1f51b","1f51c","1f51d","1f51e","1f51f","1f520","1f521","1f522","1f523","1f524","1f525","1f526","1f527","1f528","1f529","1f52a","1f52b","1f52c","1f52d","1f52e","1f52f","1f530","1f531","1f532","1f533","1f534","1f535","1f536","1f537","1f538","1f539","1f53a","1f53b","1f53c","1f53d","1f549-fe0f","1f54a-fe0f","1f54b","1f54c","1f54d","1f54e","1f550","1f551","1f552","1f553","1f554","1f555","1f556","1f557","1f558","1f559","1f55a","1f55b","1f55c","1f55d","1f55e","1f55f","1f560","1f561","1f562","1f563","1f564","1f565","1f566","1f567","1f56f-fe0f","1f570-fe0f","1f573-fe0f","1f574-fe0f","1f575-fe0f-200d-2640-fe0f","1f575-fe0f-200d-2642-fe0f","1f575-fe0f","1f577-fe0f","1f578-fe0f","1f579-fe0f","1f57a","1f587-fe0f","1f58a-fe0f","1f58b-fe0f","1f58c-fe0f","1f58d-fe0f","1f590-fe0f","1f595","1f596","1f5a4","1f5a5-fe0f","1f5a8-fe0f","1f5b1-fe0f","1f5b2-fe0f","1f5bc-fe0f","1f5c2-fe0f","1f5c3-fe0f","1f5c4-fe0f","1f5d1-fe0f","1f5d2-fe0f","1f5d3-fe0f","1f5dc-fe0f","1f5dd-fe0f","1f5de-fe0f","1f5e1-fe0f","1f5e3-fe0f","1f5e8-fe0f","1f5ef-fe0f","1f5f3-fe0f","1f5fa-fe0f","1f5fb","1f5fc","1f5fd","1f5fe","1f5ff","1f600","1f601","1f602","1f603","1f604","1f605","1f606","1f607","1f608","1f609","1f60a","1f60b","1f60c","1f60d","1f60e","1f60f","1f610","1f611","1f612","1f613","1f614","1f615","1f616","1f617","1f618","1f619","1f61a","1f61b","1f61c","1f61d","1f61e","1f61f","1f620","1f621","1f622","1f623","1f624","1f625","1f626","1f627","1f628","1f629","1f62a","1f62b","1f62c","1f62d","1f62e-200d-1f4a8","1f62e","1f62f","1f630","1f631","1f632","1f633","1f634","1f635-200d-1f4ab","1f635","1f636-200d-1f32b-fe0f","1f636","1f637","1f638","1f639","1f63a","1f63b","1f63c","1f63d","1f63e","1f63f","1f640","1f641","1f642","1f643","1f644","1f645-200d-2640-fe0f","1f645-200d-2642-fe0f","1f645","1f646-200d-2640-fe0f","1f646-200d-2642-fe0f","1f646","1f647-200d-2640-fe0f","1f647-200d-2642-fe0f","1f647","1f648","1f649","1f64a","1f64b-200d-2640-fe0f","1f64b-200d-2642-fe0f","1f64b","1f64c","1f64d-200d-2640-fe0f","1f64d-200d-2642-fe0f","1f64d","1f64e-200d-2640-fe0f","1f64e-200d-2642-fe0f","1f64e","1f64f","1f680","1f681","1f682","1f683","1f684","1f685","1f686","1f687","1f688","1f689","1f68a","1f68b","1f68c","1f68d","1f68e","1f68f","1f690","1f691","1f692","1f693","1f694","1f695","1f696","1f697","1f698","1f699","1f69a","1f69b","1f69c","1f69d","1f69e","1f69f","1f6a0","1f6a1","1f6a2","1f6a3-200d-2640-fe0f","1f6a3-200d-2642-fe0f","1f6a3","1f6a4","1f6a5","1f6a6","1f6a7","1f6a8","1f6a9","1f6aa","1f6ab","1f6ac","1f6ad","1f6ae","1f6af","1f6b0","1f6b1","1f6b2","1f6b3","1f6b4-200d-2640-fe0f","1f6b4-200d-2642-fe0f","1f6b4","1f6b5-200d-2640-fe0f","1f6b5-200d-2642-fe0f","1f6b5","1f6b6-200d-2640-fe0f","1f6b6-200d-2642-fe0f","1f6b6","1f6b7","1f6b8","1f6b9","1f6ba","1f6bb","1f6bc","1f6bd","1f6be","1f6bf","1f6c0","1f6c1","1f6c2","1f6c3","1f6c4","1f6c5","1f6cb-fe0f","1f6cc","1f6cd-fe0f","1f6ce-fe0f","1f6cf-fe0f","1f6d0","1f6d1","1f6d2","1f6d5","1f6d6","1f6d7","1f6e0-fe0f","1f6e1-fe0f","1f6e2-fe0f","1f6e3-fe0f","1f6e4-fe0f","1f6e5-fe0f","1f6e9-fe0f","1f6eb","1f6ec","1f6f0-fe0f","1f6f3-fe0f","1f6f4","1f6f5","1f6f6","1f6f7","1f6f8","1f6f9","1f6fa","1f6fb","1f6fc","1f7e0","1f7e1","1f7e2","1f7e3","1f7e4","1f7e5","1f7e6","1f7e7","1f7e8","1f7e9","1f7ea","1f7eb","1f90c","1f90d","1f90e","1f90f","1f910","1f911","1f912","1f913","1f914","1f915","1f916","1f917","1f918","1f919","1f91a","1f91b","1f91c","1f91d","1f91e","1f91f","1f920","1f921","1f922","1f923","1f924","1f925","1f926-200d-2640-fe0f","1f926-200d-2642-fe0f","1f926","1f927","1f928","1f929","1f92a","1f92b","1f92c","1f92d","1f92e","1f92f","1f930","1f931","1f932","1f933","1f934","1f935-200d-2640-fe0f","1f935-200d-2642-fe0f","1f935","1f936","1f937-200d-2640-fe0f","1f937-200d-2642-fe0f","1f937","1f938-200d-2640-fe0f","1f938-200d-2642-fe0f","1f938","1f939-200d-2640-fe0f","1f939-200d-2642-fe0f","1f939","1f93a","1f93c-200d-2640-fe0f","1f93c-200d-2642-fe0f","1f93c","1f93d-200d-2640-fe0f","1f93d-200d-2642-fe0f","1f93d","1f93e-200d-2640-fe0f","1f93e-200d-2642-fe0f","1f93e","1f93f","1f940","1f941","1f942","1f943","1f944","1f945","1f947","1f948","1f949","1f94a","1f94b","1f94c","1f94d","1f94e","1f94f","1f950","1f951","1f952","1f953","1f954","1f955","1f956","1f957","1f958","1f959","1f95a","1f95b","1f95c","1f95d","1f95e","1f95f","1f960","1f961","1f962","1f963","1f964","1f965","1f966","1f967","1f968","1f969","1f96a","1f96b","1f96c","1f96d","1f96e","1f96f","1f970","1f971","1f972","1f973","1f974","1f975","1f976","1f977","1f978","1f97a","1f97b","1f97c","1f97d","1f97e","1f97f","1f980","1f981","1f982","1f983","1f984","1f985","1f986","1f987","1f988","1f989","1f98a","1f98b","1f98c","1f98d","1f98e","1f98f","1f990","1f991","1f992","1f993","1f994","1f995","1f996","1f997","1f998","1f999","1f99a","1f99b","1f99c","1f99d","1f99e","1f99f","1f9a0","1f9a1","1f9a2","1f9a3","1f9a4","1f9a5","1f9a6","1f9a7","1f9a8","1f9a9","1f9aa","1f9ab","1f9ac","1f9ad","1f9ae","1f9af","1f9b4","1f9b5","1f9b6","1f9b7","1f9b8-200d-2640-fe0f","1f9b8-200d-2642-fe0f","1f9b8","1f9b9-200d-2640-fe0f","1f9b9-200d-2642-fe0f","1f9b9","1f9ba","1f9bb","1f9bc","1f9bd","1f9be","1f9bf","1f9c0","1f9c1","1f9c2","1f9c3","1f9c4","1f9c5","1f9c6","1f9c7","1f9c8","1f9c9","1f9ca","1f9cb","1f9cd-200d-2640-fe0f","1f9cd-200d-2642-fe0f","1f9cd","1f9ce-200d-2640-fe0f","1f9ce-200d-2642-fe0f","1f9ce","1f9cf-200d-2640-fe0f","1f9cf-200d-2642-fe0f","1f9cf","1f9d0","1f9d1-200d-1f33e","1f9d1-200d-1f373","1f9d1-200d-1f37c","1f9d1-200d-1f384","1f9d1-200d-1f393","1f9d1-200d-1f3a4","1f9d1-200d-1f3a8","1f9d1-200d-1f3eb","1f9d1-200d-1f3ed","1f9d1-200d-1f4bb","1f9d1-200d-1f4bc","1f9d1-200d-1f527","1f9d1-200d-1f52c","1f9d1-200d-1f680","1f9d1-200d-1f692","1f9d1-200d-1f91d-200d-1f9d1","1f9d1-200d-1f9af","1f9d1-200d-1f9b0","1f9d1-200d-1f9b1","1f9d1-200d-1f9b2","1f9d1-200d-1f9b3","1f9d1-200d-1f9bc","1f9d1-200d-1f9bd","1f9d1-200d-2695-fe0f","1f9d1-200d-2696-fe0f","1f9d1-200d-2708-fe0f","1f9d1","1f9d2","1f9d3","1f9d4-200d-2640-fe0f","1f9d4-200d-2642-fe0f","1f9d4","1f9d5","1f9d6-200d-2640-fe0f","1f9d6-200d-2642-fe0f","1f9d7-200d-2640-fe0f","1f9d7-200d-2642-fe0f","1f9d7","1f9d8-200d-2640-fe0f","1f9d8-200d-2642-fe0f","1f9d8","1f9d9-200d-2640-fe0f","1f9d9-200d-2642-fe0f","1f9d9","1f9da-200d-2640-fe0f","1f9da-200d-2642-fe0f","1f9da","1f9db-200d-2640-fe0f","1f9db-200d-2642-fe0f","1f9db","1f9dc-200d-2640-fe0f","1f9dc-200d-2642-fe0f","1f9dc","1f9dd-200d-2640-fe0f","1f9dd-200d-2642-fe0f","1f9dd","1f9de-200d-2640-fe0f","1f9de-200d-2642-fe0f","1f9de","1f9df-200d-2640-fe0f","1f9df-200d-2642-fe0f","1f9df","1f9e0","1f9e1","1f9e2","1f9e3","1f9e4","1f9e5","1f9e6","1f9e7","1f9e8","1f9e9","1f9ea","1f9eb","1f9ec","1f9ed","1f9ee","1f9ef","1f9f0","1f9f1","1f9f2","1f9f3","1f9f4","1f9f5","1f9f6","1f9f7","1f9f8","1f9f9","1f9fa","1f9fb","1f9fc","1f9fd","1f9fe","1f9ff","1fa70","1fa71","1fa72","1fa73","1fa74","1fa78","1fa7a","1fa80","1fa81","1fa82","1fa83","1fa84","1fa85","1fa86","1fa90","1fa91","1fa92","1fa93","1fa94","1fa95","1fa96","1fa97","1fa98","1fa99","1fa9a","1fa9b","1fa9c","1fa9d","1fa9e","1fa9f","1faa0","1faa1","1faa2","1faa3","1faa4","1faa5","1faa6","1faa7","1faa8","1fab0","1fab1","1fab2","1fab3","1fab4","1fab5","1fab6","1fac0","1fac1","1fac2","1fad0","1fad1","1fad2","1fad3","1fad4","1fad5","1fad6","203c-fe0f","2049-fe0f","2122-fe0f","2139-fe0f","2194-fe0f","2195-fe0f","2196-fe0f","2197-fe0f","2198-fe0f","2199-fe0f","21a9-fe0f","21aa-fe0f","23-fe0f-20e3","231a","231b","2328-fe0f","23cf-fe0f","23e9","23ea","23eb","23ec","23ed-fe0f","23ee-fe0f","23ef-fe0f","23f0","23f1-fe0f","23f2-fe0f","23f3","23f8-fe0f","23f9-fe0f","23fa-fe0f","24c2-fe0f","25aa-fe0f","25ab-fe0f","25b6-fe0f","25c0-fe0f","25fb-fe0f","25fc-fe0f","25fd","25fe","2600-fe0f","2601-fe0f","2602-fe0f","2603-fe0f","2604-fe0f","260e-fe0f","2611-fe0f","2614","2615","2618-fe0f","261d-fe0f","2620-fe0f","2622-fe0f","2623-fe0f","2626-fe0f","262a-fe0f","262e-fe0f","262f-fe0f","2638-fe0f","2639-fe0f","263a-fe0f","2640-fe0f","2642-fe0f","2648","2649","264a","264b","264c","264d","264e","264f","2650","2651","2652","2653","265f-fe0f","2660-fe0f","2663-fe0f","2665-fe0f","2666-fe0f","2668-fe0f","267b-fe0f","267e-fe0f","267f","2692-fe0f","2693","2694-fe0f","2695-fe0f","2696-fe0f","2697-fe0f","2699-fe0f","269b-fe0f","269c-fe0f","26a0-fe0f","26a1","26a7-fe0f","26aa","26ab","26b0-fe0f","26b1-fe0f","26bd","26be","26c4","26c5","26c8-fe0f","26ce","26cf-fe0f","26d1-fe0f","26d3-fe0f","26d4","26e9-fe0f","26ea","26f0-fe0f","26f1-fe0f","26f2","26f3","26f4-fe0f","26f5","26f7-fe0f","26f8-fe0f","26f9-fe0f-200d-2640-fe0f","26f9-fe0f-200d-2642-fe0f","26f9-fe0f","26fa","26fd","2702-fe0f","2705","2708-fe0f","2709-fe0f","270a","270b","270c-fe0f","270d-fe0f","270f-fe0f","2712-fe0f","2714-fe0f","2716-fe0f","271d-fe0f","2721-fe0f","2728","2733-fe0f","2734-fe0f","2744-fe0f","2747-fe0f","274c","274e","2753","2754","2755","2757","2763-fe0f","2764-fe0f-200d-1f525","2764-fe0f-200d-1fa79","2764-fe0f","2795","2796","2797","27a1-fe0f","27b0","27bf","2934-fe0f","2935-fe0f","2a-fe0f-20e3","2b05-fe0f","2b06-fe0f","2b07-fe0f","2b1b","2b1c","2b50","2b55","30-fe0f-20e3","3030-fe0f","303d-fe0f","31-fe0f-20e3","32-fe0f-20e3","3297-fe0f","3299-fe0f","33-fe0f-20e3","34-fe0f-20e3","35-fe0f-20e3","36-fe0f-20e3","37-fe0f-20e3","38-fe0f-20e3","39-fe0f-20e3","a9-fe0f","ae-fe0f"],
        h = findByProps("getURL").getURL

findByPropsAll("getURL")[1].getURL = function(e){
  if(a.has(e)) return ""
  let c = findByProps("convert").convert.toCodePoint(e)
  if(!s.includes(c)) return h(e)
  return 'https://raw.githubusercontent.com/justsomederpystuff/fluent-emoji/main/static/' + c + '.png'
}
 Fluent = injectCSS(`
    .emojiSpriteImage-3ykvhZ[style*='background-image: url("/assets/b20e789a3f12c621011079d59fd92e9d.png")'] {
        background-image: url("https://cdn.discordapp.com/attachments/844876269916651520/1003301897861599262/sheet-64.png") !important;
    }
    .emojiSpriteImage-3ykvhZ[style*='background-image: url("/assets/9ea87b934848cd1f5c4bc7f1fcdac803.png")'] {
        background-image: url("https://cdn.discordapp.com/attachments/844876269916651520/1003301897861599262/sheet-64.png") !important;
    }
`)
    /*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
    var twemoji = function () {
        "use strict";
        var twemoji = {
                base: "https://raw.githubusercontent.com/justsomederpystuff/fluent-emoji/main/static/",
                ext: ".png",
                size: "",
                className: "emoji",
                convert: {
                    fromCodePoint: fromCodePoint,
                    toCodePoint: toCodePoint
                },
                onerror: function onerror(e) {},
                parse: parse,
                replace: replace,
                test: test
            },
            escaper = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            },
            re = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
            UFE0Fg = /\uFE0F/g,
            U200D = String.fromCharCode(8205),
            rescaper = /[&<>'"]/g,
            shouldntBeParsed = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
            fromCharCode = String.fromCharCode;
        return twemoji;

        function createText(text, clean) {
            return document.createTextNode(clean ? text.replace(UFE0Fg, "") : text)
        }

        function escapeHTML(s) {
            return s.replace(rescaper, replacer)
        }

        function defaultImageSrcGenerator(icon, options) {
            return "".concat(options.base, options.size, "/", icon, options.ext)
        }

        function grabAllTextNodes(node, allText) {
            var childNodes = node.childNodes,
                length = childNodes.length,
                subnode, nodeType;
            while (length--) {
                subnode = childNodes[length];
                nodeType = subnode.nodeType;
                if (nodeType === 3) {
                    allText.push(subnode)
                } else if (nodeType === 1 && !("ownerSVGElement" in subnode) && !shouldntBeParsed.test(subnode.nodeName.toLowerCase())) {
                    grabAllTextNodes(subnode, allText)
                }
            }
            return allText
        }

        function grabTheRightIcon(rawText) {
            return toCodePoint(rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, "") : rawText)
        }

        function parseNode(node, options) {
            var allText = grabAllTextNodes(node, []),
                length = allText.length,
                attrib, attrname, modified, fragment, subnode, text, match, i, index, img, rawText, iconId, src;
            while (length--) {
                modified = false;
                fragment = document.createDocumentFragment();
                subnode = allText[length];
                text = subnode.nodeValue;
                i = 0;
                while (match = re.exec(text)) {
                    index = match.index;
                    if (index !== i) {
                        fragment.appendChild(createText(text.slice(i, index), true))
                    }
                    rawText = match[0];
                    iconId = grabTheRightIcon(rawText);
                    i = index + rawText.length;
                    src = options.callback(iconId, options);
                    if (iconId && src) {
                        if (!emojis.includes(iconId)) {
                            src = src.replace('https://raw.githubusercontent.com/justsomederpystuff/fluent-emoji/main/static/', 'https://twemoji.maxcdn.com/v/14.0.2/72x72')
                        }
                        img = new Image;
                        img.onerror = options.onerror;
                        img.setAttribute("draggable", "false");
                        attrib = options.attributes(rawText, iconId);
                        for (attrname in attrib) {
                            if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && !img.hasAttribute(attrname)) {
                                img.setAttribute(attrname, attrib[attrname])
                            }
                        }
                        img.className = options.className;
                        img.alt = rawText;
                        img.src = src;
                        modified = true;
                        fragment.appendChild(img)
                    }
                    if (!img) fragment.appendChild(createText(rawText, false));
                    img = null
                }
                if (modified) {
                    if (i < text.length) {
                        fragment.appendChild(createText(text.slice(i), true))
                    }
                    subnode.parentNode.replaceChild(fragment, subnode)
                }
            }
            return node
        }

        function parseString(str, options) {
            return replace(str, function (rawText) {
                var ret = rawText,
                    iconId = grabTheRightIcon(rawText),
                    src = options.callback(iconId, options),
                    attrib, attrname;
                if (iconId && src) {
                    ret = "<img ".concat('class="', options.className, '" ', 'draggable="false" ', 'alt="', rawText, '"', ' src="', src, '"');
                    attrib = options.attributes(rawText, iconId);
                    for (attrname in attrib) {
                        if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && ret.indexOf(" " + attrname + "=") === -1) {
                            ret = ret.concat(" ", attrname, '="', escapeHTML(attrib[attrname]), '"')
                        }
                    }
                    ret = ret.concat("/>")
                }
                return ret
            })
        }

        function replacer(m) {
            return escaper[m]
        }

        function returnNull() {
            return null
        }

        function toSizeSquaredAsset(value) {
            return typeof value === "number" ? value + "x" + value : value
        }

        function fromCodePoint(codepoint) {
            var code = typeof codepoint === "string" ? parseInt(codepoint, 16) : codepoint;
            if (code < 65536) {
                return fromCharCode(code)
            }
            code -= 65536;
            return fromCharCode(55296 + (code >> 10), 56320 + (code & 1023))
        }

        function parse(what, how) {
            if (!how || typeof how === "function") {
                how = {
                    callback: how
                }
            }
            return (typeof what === "string" ? parseString : parseNode)(what, {
                callback: how.callback || defaultImageSrcGenerator,
                attributes: typeof how.attributes === "function" ? how.attributes : returnNull,
                base: typeof how.base === "string" ? how.base : twemoji.base,
                ext: how.ext || twemoji.ext,
                size: how.folder || toSizeSquaredAsset(how.size || twemoji.size),
                className: how.className || twemoji.className,
                onerror: how.onerror || twemoji.onerror
            })
        }

        function replace(text, callback) {
            return String(text).replace(re, callback)
        }

        function test(text) {
            re.lastIndex = 0;
            var result = re.test(text);
            re.lastIndex = 0;
            return result
        }

        function toCodePoint(unicodeSurrogates, sep) {
            var r = [],
                c = 0,
                p = 0,
                i = 0;
            while (i < unicodeSurrogates.length) {
                c = unicodeSurrogates.charCodeAt(i++);
                if (p) {
                    r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
                    p = 0
                } else if (55296 <= c && c <= 56319) {
                    p = c
                } else {
                    r.push(c.toString(16))
                }
            }
            return r.join(sep || "-")
        }
    }();

    new MutationObserver(() => twemoji.parse(document.body)).observe(
        document.body,
       { childList: true, subtree: true }
    );

      },
      onUnload() {
        Fluent()
      }
    }
  }