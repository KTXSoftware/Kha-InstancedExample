let project = new Project('Instanced Example');

project.addSources('Sources');
project.addShaders('Sources/Shaders/**');

project.addCDefine('KORE_ANDROID_API=18');

resolve(project);
