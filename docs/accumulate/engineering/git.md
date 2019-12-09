# Git
### git 操作
- 丢弃所有修改过未提交add的文件

  `git checkout .`

- `git add` 撤销

  `git status`  查看add的文件
  `git reset HEAD`  撤销上一次add的全部文件
  `git reset HEAD *.file `  撤销某个文件

- `git commit ` 撤销
  `git log`  查看提交记录，找到提交的id
  `git reset commit_id`  撤回提交

- `git push` 撤销
  `git revert HEAD`  撤销前一次提交
  `git revert commit_id` 撤销制定版本

- 删除untracked files（未监控文件）

  `git clean -nf/-nfd`  删除之前先确认会删除哪些文件
  `git clean -f`  删除文件
  `git clean -fd`  删除目录与文件

- 切换到远程分支

  `git pull origin`  先拉取远程分支

  `git branch -a`  查看所有分支名以及当前分支
  `git checkout -b branchA origin/branchA`  新建本地分支并拉取远程分支

- 删除分支

  `git branch -d branch1`

  `git branch -D branch1` （强制删除）

- 恢复误删分支

  `git log -g`  找回之前提交的commit

  `git branch new_branch commit_id`  用这个commit创建一个分支

  `git checkout new_branch`  切换到new_branch分支，检查文件是否存在

- 挑选某一分支的某些提交到自己分支上

  `git checkout branch2`  先切换到某个分支

  `git log`  查看想要挑选的提交commit_id

  `git checkout branch1`  切换到想要合并到的分支

  `git log`  查看提交

  `git cherry-pick commit_id`  把branch2的某个提交（commit_id）合并到branch1分支上

  (如果出现冲突，先解决冲突，再手动提交)

  `git cherry-pick  -n`  不会自动提交

  `git cherry-pick --quit`  中断这次cherry-pick

  `git cherry-pick --abort`  取消这次cherry-pick，回到分支之前的状态

- 保存中间状态，要切换分支但又不想提交

  `git stash`  保存起来，分支回到最初状态

  `git stash list`  查看已保存的内容

  `git stash apply [stash@{0}]`  应用某个已保存的内容

  `git stash drop [stash@{0}]`  丢弃已保存的内容

- 配置个人用户名及电子邮箱
  `git config user.name 'xxx'`
  `git config user.email xxx@xxx`
  
- 配置自动push，不用输入账号密码
  
  `git config --global credential.helper store`
  
  `config --global push.default simple`

- 更改所有提交记录的邮箱信息
``` bash
git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "username@gmail.com" ];
        then
                GIT_AUTHOR_NAME="username";
                GIT_AUTHOR_EMAIL="new_username@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
```

### .gitingore
1. 忽略一个特定的文件：/filename.extension
2. 忽略所有同名的文件：filename.extension
3. 忽略一个特定的目录：folder/ （这会连同其下所有子目录及文件都被忽略）
4. 但是排除一个特定的模式：（在 3 的基础上）!folder/some/important/filename.extension
5. 忽略指定目录下所有子目录下的特定文件：folder/**/filename.extension
6. 同上，但是只匹配文件扩展名：folder/**/*.extension
7. 同上，但是只匹配特定的目录：folder/**/tmp/
8. 忽略一个根目录下的文件： /folder （不包括/folder2/folder，不包括/folder本身）


### 问题解决
解决Git refusing to merge unrelated histories
原因：
方案：在git pull origin master后面跟上参数--allow-unrelated-histories
