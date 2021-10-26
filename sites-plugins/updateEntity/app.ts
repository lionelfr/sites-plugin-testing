import {
  EntityProfile,
  EntityUpdate,
  getEntity,
  updateEntity,
} from "./yext";

export async function handleEntityUpdate(data: EntityUpdate) {
  console.log(`     start: ${new Date().toISOString()}`);
  if (data.id && data.updatedUrl) {
    const result = await updateEntityUrl(data.id, data.updatedUrl)
    console.log(`     end: ${new Date().toISOString()}`);
    return result
  } else {
    console.log(`     end: ${new Date().toISOString()}`);
    return null
  }
}

export async function updateEntityUrl(id: string, updatedUrl: string) {
  let entity = await getEntity<EntityProfile>(id)
  if (!entity) {
    throw new Error(`${id} not found`);
  }
  if (entity.websiteUrl) {
    entity.websiteUrl.url = updatedUrl
  }
  let result = await updateEntity(id, entity)
  return result
}
