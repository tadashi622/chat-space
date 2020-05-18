# README
## アプリケーション概要
チャットアプリケーションを作成しました。
Jsを活用し、非同期や自動更新機能を実装しました。
写真投稿やグループを作成しチャットのコミュニケーションができます。

## 接続先情報
- URL http://3.20.161.142/
- name test
- email test@test
- pass tttttttt

## 開発環境
- Ruby/Ruby on Rails/MySQL/Github/AWS/JavaScript/Visual Studio Code
## 開発期間と平均作業時間
- 開発期間：1週間
- 人数：1人
- 1日あたりの平均作業時間：10時間

![chat](https://user-images.githubusercontent.com/62418207/81946888-e146bb00-963a-11ea-8eef-a7bcc5c8fe80.gif)

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string||
|imag|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belong_to :group
- belong_to :user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users, through:  :groups_users
- has_many :messages
- has_many :groups_users

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups, through:  :groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル（中間テーブル）
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


