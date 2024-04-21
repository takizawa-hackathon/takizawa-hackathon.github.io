# takizawa-hackathon.github.io

## ローカル環境での実行方法

### Rubyをインストール

#### [asdf](https://github.com/asdf-vm/asdf)の場合

`.tool-versions` ファイルを導入しているため、`asdf` を利用されている方は下記コマンドでインストールできます。

``` .sh
asdf install
```

#### その他

`.tool-versions` に記述されているバージョンを適宜インストールしてください。

### Jekyllを起動

``` .sh
bundle install
bundle exec jekyll serve 
```
