## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|imag|string|null: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belong_to :group
- belong_to :user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,foreign_key: true|
### Association
- has_many :user, through:  :groups_users
- has_many :messages
- has_many :groups_users

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :group, through:  :groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル（中間テーブル）
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


