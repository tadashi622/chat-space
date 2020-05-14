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


