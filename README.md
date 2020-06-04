## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false|
|password|text|null: false|
### Association
- has_many :groups_users
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
### Association
- has_many :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|grop_id|integer|null: false, foreign_key: true|
### Association
- has_many :massages
- belongs_to :group
- belongs_to :user

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|groups_users_id|integer|null: false,foreign_key: true|
### Association
- belongs_to :group_user