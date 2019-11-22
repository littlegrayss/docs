# Git

### .gitingore
1. 忽略一个特定的文件：/filename.extension
2. 忽略所有同名的文件：filename.extension
3. 忽略一个特定的目录：folder/ （这会连同其下所有子目录及文件都被忽略）
4. 但是排除一个特定的模式：（在 3 的基础上）!folder/some/important/filename.extension
5. 忽略指定目录下所有子目录下的特定文件：folder/**/filename.extension
6. 同上，但是只匹配文件扩展名：folder/**/*.extension
7. 同上，但是只匹配特定的目录：folder/**/tmp/
8. 忽略一个根目录下的文件： /folder （不包括/folder2/folder，不包括/folder本身）
