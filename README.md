## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false|
|password|text|null: false|
### Association
- has_many :groups_users
- has_many :massages
- has_many :groups, through:  :groups_users
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :groups_users
- has_many :massages
- has_many :users, through:  :groups_users
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|references|null: false,foreign_key: true|
|group|references|null: false,foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user