import axios from 'axios'
import type { PostResult } from '../types.js'

interface ThreadsConfig {
  userId: string
  accessToken: string
}

const API_BASE = 'https://graph.threads.net/v1.0'

export async function postToThreads(
  config: ThreadsConfig,
  text: string,
): Promise<PostResult> {
  try {
    const createRes = await axios.post(`${API_BASE}/${config.userId}/threads`, {
      media_type: 'TEXT',
      text,
      access_token: config.accessToken,
    })

    const containerId = createRes.data.id

    const publishRes = await axios.post(
      `${API_BASE}/${config.userId}/threads_publish`,
      {
        creation_id: containerId,
        access_token: config.accessToken,
      },
    )

    return {
      platform: 'Threads',
      success: true,
      url: `https://www.threads.net/t/${publishRes.data.id}`,
    }
  } catch (err: any) {
    const msg = err?.response?.data?.error?.message || err.message
    return { platform: 'Threads', success: false, error: msg }
  }
}
